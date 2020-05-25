import database from '../../../utils/database';
import async from 'async';

function listCategories(callback) {
    let query = `select distinct category_name from category order by category_name asc`.replace('\n', ' ');
    database.runQuery(query, function(err, result) {
        let ret = {}
        result.forEach(c => {
            ret[c.category_name] = c.category_name;
        });
        return callback(err, ret)
    })
}

function findByCategory(category, offset, limit, callback) {
    let query = `select id, category, author, title, description, tags, created_at, updated_at 
            from post
            where category = '${category}'
            order by updated_at desc
            limit ${offset}, ${limit}
            `.replace('\n', ' ');

    return database.runQuery(query, function(err, result) {
        return callback(err, result)
    })
}

/*
    list posts by category
*/
function handleGet(req, res) {
    let {
        query: { offset, limit, category },
    } = req

    if (category) {
        offset = offset ? offset : 0;
        limit = limit ? limit : 20;
        return findByCategory(category, offset, limit, (err, posts) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }
            return res.status(200).json(posts);
        })
    }
  
    offset = offset ? offset : 0;
    limit = limit ? limit : 5;

    return listCategories((err, cats) => {
        return async.mapValues(cats, function(category, k, callback) {
            let query = `select id, category, author, title, description, tags, created_at, updated_at 
            from post
            where category = '${category}'
            order by updated_at desc
            limit ${offset}, ${limit}
            `.replace('\n', ' ');

            return database.runQuery(query, function(err, result) {
                callback(err, result)
            })
        }, function(err, posts) {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }
    
            return res.status(200).json(posts);
        })
    })
}

export default (req, res) => {
    switch(req.method) {
        case 'GET':
            handleGet(req, res);
            break;
        default:
            return res.status(405)
    }
}
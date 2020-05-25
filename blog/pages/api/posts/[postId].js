import async from 'async';
import database from '../../../utils/database';

function findById(id, callback) {
    let query = `select file_name from post where id = ${id}`;
    database.runQuery(query, function(err, result) {
        if (result.length == 0) throw Error(`Post ${id} is not found`)
        const path = result[0].file_name;

        return callback(err, path);
    })
}

export default (req, res) => {
    const { query: { postId } } = req

    if (req.method !== 'GET') {
        return res.status(405).json({
            error: `${req.method} is not allowed`
        });
    }

    if (isNaN(postId)) {
        return res.status(400).json({
            error: `postId must be numeric`
        });
    }

    return async.waterfall([
        async.constant(postId),
        findById
    ], function(err, path){
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        return res.status(200).json({
            file_name: path
        });
    })
}
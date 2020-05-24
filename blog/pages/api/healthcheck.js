import database from '../../utils/database';

export default function Healthcheck(req, res) {
    database.runQuery('select 1 from post', function(err, result) {
        if (err) {
            return res.status(500).json({
                status: 'db error'
            });
        }

        return res.status(200).json({
            status: 'OK'
        });
    })
}
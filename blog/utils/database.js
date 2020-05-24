import mysql from 'mysql';
import config from 'config';
import pino from 'pino';

let pool;
let logger = pino();
const dbConfig = config.get('db');

let database = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : dbConfig.get("host"),
        user     : dbConfig.get("username"),
        password : dbConfig.get("password"),
        database : dbConfig.get("database")
      });

      logger.info('New db connection pool is created')
      return pool;
    },
    runQuery: function(q, callback) {
      let myPool = this.getPool();
      myPool.getConnection(function(outterErr, conn) {
        if (outterErr) {
          logger.error(outterErr.message);
          throw outterErr;
        }

        conn.query(q, function(err, result) {
          conn.release();
          if (err) {
            throw err
          }
          callback(err, result);
        });
      });
    }
};

export default database;
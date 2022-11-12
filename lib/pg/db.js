import { Pool } from 'pg';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const pool = new Pool({
    database: DB_NAME,
    user:     DB_USER,
    password: DB_PASS,
    host:     DB_HOST,
    port:     DB_PORT
});

export function executeQuery(query = '', values = []) {
    pool.connect((err, client, done) => {
        if (err) throw err;

        client.query(query, values, (err, res) => {
            done();

            if (err) {
                console.log(err.stack);
                return;
            }
            return res.rows;
        })
    })
}
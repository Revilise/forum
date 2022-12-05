import {pool} from "../../../lib/pg/db";

export default async function UserRoute(req, res) {
    const { id } = req.query;

    await pool.query({
        text: `
        SELECT
           r.name as role,
           user_id as id,
           user_name as name,
           f.file_path as filepath
        FROM users
        JOIN roles r on users.role_id = r.role_id
        JOIN files f on users.avatar_id = f.file_id
        WHERE user_id = $1;
        `,
        values: [id]
    })
        .then(data => res.json(data.rows[0]))
        // .catch(err => res.status(500));
}
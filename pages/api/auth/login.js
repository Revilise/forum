import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";
import {pool} from "../../../lib/pg/db";

async function LoginRoute(req, res) {
    const {login, password} = await req.body;

   await pool
        .query({
            text: `
                SELECT
                   r.name as role,
                   user_id as id,
                   user_name as name,
                   f.file_path as filepath,
                   user_nickname as nickname
                FROM users
                JOIN roles r on users.role_id = r.role_id
                JOIN files f on users.avatar_id = f.file_id
                WHERE user_login = $1 AND user_password = MD5($2)
            `,
            values: [login, password]
        })
        .then(async (user) => {
            if (!user.rows.length) return res.json({ok: false})
            const user_data = user.rows[0];
            req.session.user = {...user_data, isLogged: true};
            await req.session.save()
            res.json(req.session.user);
        })
        .catch(err => console.log(err))
}

export default withIronSessionApiRoute(LoginRoute, sessionOptions);
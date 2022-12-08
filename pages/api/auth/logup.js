import {pool} from "../../../lib/pg/db";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";

function LogupRoute(req, res) {
    const { login, password, name, nickname, email} = req.body;

    pool.query({
        text: `
            WITH inserted_user as (
                INSERT INTO users
                    (user_name, user_email, user_login, user_password, user_nickname)
                VALUES ($1, $2, $3, MD5($4), $5)
                RETURNING *
            )
            SELECT
                   r.name as role,
                   i.user_id as id,
                   i.user_name as name,
                   f.file_path as filepath,
                   i.user_nickname as nickname
            FROM inserted_user i
                INNER JOIN files f ON i.avatar_id = f.file_id
                INNER JOIN roles r ON r.role_id = i.role_id;
        `,
        values: [name, email, login, password, '@' + nickname]
    }).then( async (user) => {
        if (!user.rows.length) return res.json({ok: false})

        const user_data = user.rows[0];
        req.session.user = {...user_data, isLogged: true};
        await req.session.save()
        return res.json(req.session.user);
    }).catch(err => console.log(err));
}

export default withIronSessionApiRoute(LogupRoute, sessionOptions);
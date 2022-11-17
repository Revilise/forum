import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../lib/auth/session";
import {pool} from "../../lib/pg/db";

async function LoginRoute(req, res) {
    const {login, password} = await req.body;

   await pool
        .query({
            text: "SELECT user_id as id, user_name as name FROM users WHERE user_login = $1 AND user_password = MD5($2)",
            values: [login, password]
        })
        .then((user) => {
            if (!user.rows.length) return res.json({ok: false})

            req.session.user = {...user.rows[0], isLogged: true};
            req.session.save().then(() => {
                res.json(req.session.user)
            });
        })
        .catch(err => console.log(err))
}

export default withIronSessionApiRoute(LoginRoute, sessionOptions);
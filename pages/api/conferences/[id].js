import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";
import {pool} from "../../../lib/pg/db";

async function GetConferenceRoute(req, res) {
    const { id } = req.query;

    await pool
        .query({
           text: `SELECT
                    conference_name as title,
                    conference_text as text,
                    
                    u.user_name as author
               FROM conferences c
               JOIN users u ON c.author_id = u.user_id
               WHERE c.conference_id = $1;`,
            values: [id]
        })
        .then(data => res.json(data.rows[0]))
}

export default withIronSessionApiRoute(GetConferenceRoute, sessionOptions)
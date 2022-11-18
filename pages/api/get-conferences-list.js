import {pool} from "../../lib/pg/db";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../lib/auth/session";

async function GetConferenceListRoute(req, res) {
    await pool
        .query({
            text: `
                SELECT
                    conferences.conference_id,
                    conference_name as title,
                    conference_text as text,
                    datetime,
                    u.vote as vote
                FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = $1;
            `,
            values: [req.session.user.id]
        })
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => console.log(err));
}

export default withIronSessionApiRoute(GetConferenceListRoute, sessionOptions);
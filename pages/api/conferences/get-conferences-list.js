import {pool} from "../../../lib/pg/db";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";

async function GetConferenceListRoute(req, res) {
    await pool
        .query({
            text: `
                SELECT
                    conferences.conference_id,
                    conference_name as title,
                    conference_text as text,
                    TO_CHAR(datetime :: DATE, 'dd-mm-yyyy') as datetime,
                    u.vote as vote,
                    c.vote as total
                FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = $1
                LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id
                ORDER BY total DESC;
            `,
            values: [req.session.user.id]
        })
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => console.log(err));
}

export default withIronSessionApiRoute(GetConferenceListRoute, sessionOptions);
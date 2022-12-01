import {withIronSessionApiRoute} from "iron-session/next";
import {pool} from "../../../../lib/pg/db";
import {sessionOptions} from "../../../../lib/auth/session";

async function GetConferencesListRoute(req, res) {
    await pool
        .query({
            text: `
                SELECT
                    com.conference_id as conference_id,
                    com.author_id,
                    conference_name as title,
                    conference_text as text,
                    TO_CHAR(conferences.datetime :: DATE, 'dd-mm-yyyy') as datetime,
                    u.vote as vote,
                    c.vote as total
                FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = $1
                LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id
                INNER JOIN comments com on conferences.conference_id = com.conference_id
                GROUP BY com.conference_id, com.author_id, com.conference_id, conference_name, conference_text, TO_CHAR(conferences.datetime :: DATE, 'dd-mm-yyyy'), u.vote, c.vote
                HAVING com.author_id = $1
                ORDER BY total DESC;
            `,
            values: [req.session.user.id]
        })
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => console.log(err));
}

export default withIronSessionApiRoute(GetConferencesListRoute, sessionOptions);
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../../lib/auth/session";
import paramsParse from "../../../../lib/tools/ParamsParser";
import {pool} from "../../../../lib/pg/db";

async function GetConferencesListRoute(req, res) {
    const { slug } = req.query;
    const { id } = req.session.user;

    const params = paramsParse(slug);

    await pool.query({
        text:
        `SELECT
            conferences.conference_id,
            conference_name as title,
            conference_text as text,
            TO_CHAR(datetime :: DATE, 'dd-mm-yyyy hh:mm') as datetime,
            u.vote as vote,
            c.vote as total
         FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = $1
         LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id
         WHERE conference_text LIKE '%${params.keyword}%'
         ORDER BY total DESC`,
        values: [id]
    }).then(data => res.json(data.rows))
}

export default withIronSessionApiRoute(GetConferencesListRoute, sessionOptions);
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../../lib/auth/session";
import {pool} from "../../../../lib/pg/db";

async function GetCommentsListRoute(req, res) {
    const { conference_id } = req.query;

    await pool
            .query({
                text: `
                    SELECT
                           comment_id,
                           comment_text as text,
                           TO_CHAR(datetime :: DATE, 'dd-mm-yyyy hh:mm') as datetime,
                           u.user_name as author,
                           f.file_path as filepath
                    FROM comments
                    JOIN users u on comments.author_id = u.user_id
                    JOIN files f on u.avatar_id = f.file_id
                    WHERE conference_id = $1;
                `,
                values: [conference_id]
            })
        .then(data => res.json(data.rows))
}

export default withIronSessionApiRoute(GetCommentsListRoute, sessionOptions)
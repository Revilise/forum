import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";
import {pool} from "../../../lib/pg/db";

async function PostComment(req, res) {
    const { conference_id, text, parent_id = null } = req.body;
    const { id } = req.session.user;

    await pool
        .query({
            text:
                `
                INSERT INTO comments (conference_id, comment_text, datetime, author_id, parent_id)
                SELECT $1, $2, NOW(), $3, $4;
                `,
            values: [conference_id, text, id, parent_id]
        })
        .then(() => res.json({ok: true}))
        .catch(er => res.json({ok: false}))
}

export default withIronSessionApiRoute(PostComment, sessionOptions)
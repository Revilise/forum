import {pool} from "../../../lib/pg/db";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";

async function PostConferenceRoute(req, res) {
    const {title, text} = req.body;
    await pool
        .query({
        text: `
            INSERT INTO conferences 
            (conference_name, conference_text, author_id, datetime) 
            VALUES ($1, $2, $3, NOW())`,
        values: [title, text, req.session.user.id]
        })
        .then(() => res.json())
}

export default withIronSessionApiRoute(PostConferenceRoute, sessionOptions)
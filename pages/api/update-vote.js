import {withIronSessionApiRoute} from "iron-session/next/index";
import {sessionOptions} from "../../lib/auth/session";
import {pool} from "../../lib/pg/db";

async function UpdateVoteRoute(req, res) {
    const { conference_id, vote } = req.body;
    const { id } = req.session.user;

    pool
        .query({
            text: "CALL InsertOrUpdateUserVote($1, $2, $3);",
            values: [id, conference_id, vote]
        })
        .then(() => res.json())
}
export default withIronSessionApiRoute(UpdateVoteRoute, sessionOptions)
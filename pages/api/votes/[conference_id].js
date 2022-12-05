import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";
import {pool} from "../../../lib/pg/db";

async function GetConferenceTotalVoteRoute(req, res) {
    const { conference_id } = req.query;
    await pool.query({
        text: "SELECT vote from conference_sum_vote WHERE conference_id = $1",
        values: [conference_id],
    })
        .then(data => {
            if (data.rows.length) {
                res.json(data.rows[0])
            } else {
                res.json({vote: 0})
            }
        })
}
export default withIronSessionApiRoute(GetConferenceTotalVoteRoute, sessionOptions)
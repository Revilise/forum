import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../../lib/auth/session";
import useUser from "../../../../lib/auth/useUser";
import {pool} from "../../../../lib/pg/db";

async function GetCommentsListRoute(req, res) {
    const { conference_id } = req.query;
    const { id } = useUser().user;

    await pool
            .query({
                text: `
                    // todo: get comments query.
                `,
                values: []
            })
        .then(data => res.json(data.rows))
}

export default withIronSessionApiRoute(GetCommentsListRoute, sessionOptions)
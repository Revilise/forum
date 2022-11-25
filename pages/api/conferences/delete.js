import {pool} from "../../../lib/pg/db";

export default async function DeleteConferenceRoute(req, res) {
    const { conference_id } = req.body;

    await pool
        .query({
            text: `DELETE FROM conferences WHERE conference_id = $1`,
            values: [conference_id]
        })
        .then(() => res.json())
}
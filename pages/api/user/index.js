import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../../lib/auth/session";

async function userRoute(req, res) {
    if (req.session.user) {
        res.json({
            ...req.session.user,
            isLogged: true
        })
    } else {
        res.json({
            isLogged: false
        })
    }
}

export default withIronSessionApiRoute(userRoute, sessionOptions)
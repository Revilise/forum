import {sessionOptions} from "../../../lib/auth/session";
import {withIronSessionApiRoute} from "iron-session/next";

function LogoutRoute(req, res) {
    req.session.destroy();
    res.json({isLogged: false})
}

export default withIronSessionApiRoute(LogoutRoute, sessionOptions)
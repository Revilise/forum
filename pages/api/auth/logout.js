import {sessionOptions} from "../../../lib/auth/session";
import {withIronSessionApiRoute} from "iron-session/next";

function LogoutRoute(req, res) {
    const filepath = req.session.user.filepath;
    req.session.destroy();
    res.json({isLogged: false, filepath })
}

export default withIronSessionApiRoute(LogoutRoute, sessionOptions)
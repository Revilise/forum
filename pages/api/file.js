import formidable from "formidable";
import fs from "fs";
import {withIronSessionApiRoute} from "iron-session/next";
import {sessionOptions} from "../../lib/auth/session";
import {pool} from "../../lib/pg/db";

export const config = {
    api: {
        bodyParser: false
    }
};

const fileRoute = async (req, res) => {
    const form = new formidable.IncomingForm();

    await form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err);
        }
        const ext = files.file.mimetype === 'image/png' ? 'png' : 'jpg'

        const path = `./public/uploads/${req.session.user.id}.${ext}`;
        await saveFile(files.file, path);

        pool.query({
            text: "CALL ChangeUserAvatar($1, $2)",
            values: [`${req.session.user.id}.${ext}`, req.session.user.id]
        })
        return;
    });

    res.json();
};

const saveFile = async (file, path) => {
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync(path, data);
    await fs.unlinkSync(file.filepath);
};

export default withIronSessionApiRoute(fileRoute, sessionOptions)
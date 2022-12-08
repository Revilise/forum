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

    form.parse(req,async (err, fields, files) => {
        const ext = files.file.mimetype === 'image/png' ? 'png' : 'jpg'

        const path = `./public/uploads/${req.session.user.id}.${ext}`;
        saveFile(files.file, path)
            .then(() => {
                pool.query({
                    text: "CALL ChangeUserAvatar($1, $2)",
                    values: [`${req.session.user.id}.${ext}`, req.session.user.id]
                })
            })
            .then(async () => {
                req.session.user.filepath = `/uploads/${req.session.user.id}.${ext}`;
                await req.session.save();
                res.json(req.session.user);
            });
    });
};

const saveFile = async (file, path) => {
    return new Promise((res, rej) => {
        const data = fs.readFileSync(file.filepath);
        fs.writeFileSync(path, data);
        fs.unlinkSync(file.filepath);
        res('resolved')
    })

};

export default withIronSessionApiRoute(fileRoute, sessionOptions)
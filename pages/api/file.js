import formidable from "formidable";
import fs from "fs";

const saveFile = async (file) => {
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/uploads/${file.filename}`, data);
    await fs.unlinkSync(file.path);
};

export default async function FileRoute(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        await saveFile(files.file);
    });
    res.json();
}
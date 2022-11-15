import cl from './conference-editor.module.scss';
import Textarea from "../../components/resized-textarea/Textarea";
import {useState} from "react";

export default function Editor() {
    const [title, changeTitle] = useState("");
    const [text, changeText] = useState("");
    return (
        <div className={cl.editor}>
            <Textarea value={title} onChange={changeTitle} placeholder={"Conference title"} className={cl.editor__input} />
            <Textarea value={text} onChange={changeText} placeholder={"Text..."} />
        </div>
    );
}
import cl from './conference-editor.module.scss';
import Textarea from "../../components/resized-textarea/Textarea";
import {selectConference, setText, setTitle} from "./ConferenceEditorSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Editor() {

    const dispatch = useDispatch();
    const {text, title} = useSelector(selectConference);

    return (
        <div className={cl.editor}>
            <Textarea value={title} onChange={(val) => dispatch(setTitle(val))} placeholder={"Conference title"} className={cl.editor__input} />
            <Textarea value={text} onChange={(val) => dispatch(setText(val))} placeholder={"Text..."} />
        </div>
    );
}
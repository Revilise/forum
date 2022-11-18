import cl from './conference-editor.module.scss';
import EditPanel from "./EditPanel";
import Editor from "./Editor";

export default function ConferenceEditor() {
    return (
        <form className={cl.container}>
            <EditPanel />
            <Editor />
        </form>
    )
}
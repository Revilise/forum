import cl from './conference-editor.module.scss';
import EditPanel from "./EditPanel";
import Editor from "./Editor";

export default function ConferenceEditor() {
    function onSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit} className={cl.container}>
            <EditPanel />
            <Editor />
        </form>
    )
}
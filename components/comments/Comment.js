import cl from './comments.module.scss';
import Avatar from "../avatar/Avatar";

export default function Comment({id, author, filepath, datetime, text}) {

    return (
        <div className={cl.item}>
            <header className={cl.header}>
                <Avatar id={id} width={36} height={36} filepath={filepath} />
                { author }
            </header>
            { text }
            <footer className={cl.footer}>
                <span>{datetime}</span>
            </footer>
        </div>
    )
}


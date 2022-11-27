import cl from './comments.module.scss';
import Avatar from "../avatar/Avatar";

export default function Comment({author, avatar, datetime, text, comment_id}) {

    return (
        <div className={cl.item}>
            <header className={cl.header}>
                <Avatar width={36} height={36} />
                {author}
            </header>
            { text }
            <footer className={cl.footer}>
                <span>{datetime}</span>
            </footer>
        </div>
    )
}


import cl from './comments.module.scss';

export default function Comment({author, avatar, datetime, text, comment_id}) {

    return (
        <div className={cl.item}>
            <header className={cl.header}>
                {author}
            </header>
            { text }
            <footer className={cl.footer}>
                <span>{datetime}</span>
            </footer>
        </div>
    )
}


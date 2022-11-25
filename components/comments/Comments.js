import cl from './comments.module.scss';
import Comment from "./Comment";

export default function Comments({items}) {
    return (
        <div className={cl.comments}>
            {items.map((el, i) => <Comment key={i} {...el} />)}
        </div>
    )
}
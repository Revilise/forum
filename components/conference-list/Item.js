import cl from './conference-list.module.scss';
import VotePanel from '../vote-panel/VotePanel';

export default function Item({
    title,
    date,
    content,
    vote
}) {
    return (
        <div className={cl.item}>
            <div className={cl.item_content}>
                <h3>{title}</h3>
                <span>{date}</span>
                <p>{content}</p>
            </div>
            <VotePanel vote={vote} />
        </div>
    )
}
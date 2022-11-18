import cl from './conference-list.module.scss';
import VotePanel from '../../features/vote-panel/VotePanel';
import Router from "next/router";

export default function Item({
    id = null,
    title = "empty",
    date = "01-01-2000",
    content = "",
    vote = 0
}) {
    function redirect() {
        if (id) Router.push(`/conference/${id}`);
    }

    return (
        <div className={cl.item}>
            <div onClick={redirect} className={cl.item_content}>
                <h3>{title}</h3>
                <span>{date}</span>
                <p>{content.length > 255 ? content.substring(0, 140) + " ..." : content }</p>
            </div>
            <VotePanel vote={vote} />
        </div>
    )
}
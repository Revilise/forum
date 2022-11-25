import cl from './conference-list.module.scss';
import VotePanel from '../vote-panel/VotePanel';
import Router from "next/router";

export default function Item({
    conference_id = null,
    title = "empty",
    datetime = "01-01-2000",
    text = "",
    vote = 0,
    total = 0
}) {
    function redirect() {
        if (conference_id) Router.push(`/conference/${conference_id}`);
    }

    return (
        <div className={cl.item}>
            <div onClick={redirect} className={cl.item_content}>
                <h3>{title}</h3>
                <span>{datetime}</span>
                <p>{total}</p>
                <p>{text.length > 255 ? text.substring(0, 140) + " ..." : text }</p>
            </div>
            <VotePanel conference_id={conference_id} vote={vote} />
        </div>
    )
}
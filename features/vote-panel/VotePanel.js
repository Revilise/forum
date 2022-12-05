import cl from './vote-panel.module.scss';
import {VoteDown, VoteUp} from "./Vote";
import {useState} from "react";

export default function VotePanel({
    vote: propsVote,
    conference_id,
    voteHandle = (f) => f,
}) {

    const [ vote, setVote ] = useState(propsVote);

    const wrappedSetVote = voteHandle(setVote);

    return (
        <div className={cl.container}>
            <VoteUp conference_id={conference_id} vote={vote} setVote={wrappedSetVote}/>
            <VoteDown conference_id={conference_id} vote={vote} setVote={wrappedSetVote} />
        </div>
    )
}
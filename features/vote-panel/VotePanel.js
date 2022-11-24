import cl from './vote-panel.module.scss';
import {VoteDown, VoteUp} from "./Vote";
import {useState} from "react";

export default function VotePanel(props) {

    const [ vote, setVote ] = useState(props.vote);

    return (
        <div className={cl.container}>
            <VoteUp conference_id={props.conference_id} vote={vote} setVote={setVote}/>
            <VoteDown conference_id={props.conference_id} vote={vote} setVote={setVote} />
        </div>
    )
}
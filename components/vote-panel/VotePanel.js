import cl from './vote-panel.module.scss';
import {VoteDown, VoteUp} from "./Vote";
import {useEffect, useState} from "react";

export default function VotePanel({vote}) {

    function useVote() {
        const [value, setVote] = useState(vote);

        return { vote: value, setVote }
    }

    return (
        <div className={cl.container}>
            <VoteUp selectData={useVote}/>
            <VoteDown selectData={useVote} />
        </div>
    )
}
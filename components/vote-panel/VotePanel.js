import cl from './vote-panel.module.scss';
import {VoteDown, VoteUp} from "./Vote";
import {useEffect, useState} from "react";



export default function VotePanel(props) {

    const [ vote, setVote ] = useState(props.vote);

    return (
        <div className={cl.container}>
            {/*<VoteUp vote={vote} useVote={useVote} />*/}
            {/*<VoteDown vote={vote} useVote={useVote} />*/}

            <VoteUp vote={vote} setVote={setVote}/>
            <VoteDown vote={vote} setVote={setVote} />
        </div>
    )
}
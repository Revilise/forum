import cl from './vote-panel.module.scss';
import Icons from "../icon/icons";
import {useEffect} from "react";

function VoteHOC(WrappedComponent, selectData) {
    return function() {
        const { vote, setVote } = selectData();

        const onVote = (value) => {
            // react query to api for updating value
            // then
            // redux changes store
            setVote(vote + value);
        }
        const onUnvote = () => {
            // react query to api for updating value into 0
            // then
            // redux changes store
            setVote(0);
        }
        console.log("data updated: "+ vote)

        return <WrappedComponent value={vote} onVote={onVote} onUnvote={onUnvote} />
    }
}

export const VoteUp = ({selectData}) => VoteHOC(
    function({value, onVote, onUnvote}) {

        const clause = value === 1;

        return (
            <button
                onClick={ clause ? onUnvote : () => onVote(1) }
                className={ clause ? cl.vote__up : cl.vote}
            >
                { clause ? <Icons.ChevronUp.Active /> : <Icons.ChevronUp /> }
            </button>
        )
    },
    selectData
)()

export const VoteDown = ({selectData}) => VoteHOC(
    function({value, onVote, onUnvote}) {
        const clause = value === -1;

        return (
            <button
                onClick={ clause ? onUnvote : () => onVote(-1) }
                className={clause ? cl.vote__down : cl.vote}
            >
                { clause ? <Icons.ChevronDown.Active /> : <Icons.ChevronDown />}
            </button>
        )
    },
    selectData
)()
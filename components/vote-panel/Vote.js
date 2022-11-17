import cl from './vote-panel.module.scss';
import Icons from "../icon/icons";
import {useEffect} from "react";

function VoteHOC(WrappedComponent, setVote, vote) {

    // const { vote, setVote } = useVote();

    useEffect(() => {

    }, [vote]);

    return function() {
        const onVote = (value) => {
            // react query to api for updating value
            // then
            // redux changes store
            setVote(value);
        }

        const onUnvote = () => {
            // react query to api for updating value into 0
            // then
            // redux changes store
            setVote(0);
        }

        return <WrappedComponent value={vote} onVote={onVote} onUnvote={onUnvote} />
    }
}

export const VoteUp = ({setVote, vote}) => VoteHOC(
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
    setVote, vote
)()

export const VoteDown = ({setVote, vote}) => VoteHOC(
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
    setVote, vote
)()
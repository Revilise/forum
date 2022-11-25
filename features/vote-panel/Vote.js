import cl from './vote-panel.module.scss';
import Icons from "../../components/icon/icons";
import axios from "axios";

function VoteHOC(WrappedComponent, setVote, vote, conference_id) {

    const url = process.env.NEXT_PUBLIC_APP_HOSTNAME+"/api/update-vote";
    function updateVote(value) {
        axios
            .post(url, {
                conference_id,
                vote: value
            })
            .then(() => setVote(value))
    }

    return function() {
        const onVote = (value) => {
            updateVote(value)
        }

        const onUnvote = () => {
            updateVote(0)
        }

        return <WrappedComponent value={vote} onVote={onVote} onUnvote={onUnvote} />
    }
}

export const VoteUp = ({setVote, vote, conference_id}) => VoteHOC(
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
    setVote, vote, conference_id
)()

export const VoteDown = ({setVote, vote, conference_id}) => VoteHOC(
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
    setVote, vote, conference_id
)()
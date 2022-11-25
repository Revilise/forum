import useComments from "../../lib/hooks/useComments";
import Comments from "./Comments";
import {useState} from "react";
import axios from "axios";
import MessageInput from "../message-input/MessageInput";

export default function CommentsAPI({conference_id}) {
    return (
        <>
            <CommentsPostAPI conference_id={conference_id} />
            <CommentsGetAPI conference_id={conference_id} />
        </>
    )
}

export function CommentsGetAPI({conference_id}) {
    const { comments } = useComments({conference_id})

    return <Comments items={comments ?? []} />
}

export function CommentsPostAPI({conference_id}) {
    const [input, changeInput] = useState("");
    const { mutateComments } = useComments({conference_id})

    async function sendComment() {
        mutateComments(
            await (async function() {
                await axios.post(
                    process.env.NEXT_PUBLIC_APP_HOSTNAME +
                    '/api/comments/post',
                    { conference_id, text: input })
                    .then(res => res.data)
                    .then(() => changeInput(''))
            })()
        )
    }

    return (
        <MessageInput
            value={input}
            onChange={e => changeInput(e.target.value)}
            placeholder={"text, @ or someting kind..."}
        >
            <MessageInput.Submit onSubmit={sendComment} />
        </MessageInput>
    )
}
import {useRouter} from "next/router";
import {useState} from "react";
import useComments from "../../lib/comments/useComments";
import axios from "axios";
import MessageInput from "../../components/message-input/MessageInput";

export default function CommentsPostApi({conference_id}) {
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
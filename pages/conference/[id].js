import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";
import ConferenceView from "../../components/conference-view/conferenceView";
import Comments from "../../components/comments/Comments";
import MessageInput from "../../components/message-input/MessageInput";
import useSWR from "swr";
import {useState} from "react";
import {fetcher} from "../../components/conference-view/fetcher";
import axios from "axios";

export const getServerSideProps = redirectUnauthorized;

export default function ConferencePage() {
    const router = useRouter();
    const [input, changeInput] = useState("");
    const { id } = router.query;
    const { data, mutate } = useSWR(`/api/comments/get-list/${id}`)

    async function sendComment() {
        mutate(
            await (async function() {
                const res = await axios.post(
                    process.env.NEXT_PUBLIC_APP_HOSTNAME +
                    '/api/comments/post',
                    { conference_id: id, text: input })
                    .then(res => res.data)
                    .then(() => changeInput(''))
            })()
        )
    }

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                <ConferenceView conference_id={id} />
                <h3>COMMENTS</h3>
                <MessageInput
                    value={input}
                    onChange={e => changeInput(e.target.value)}
                    placeholder={"text, @ or someting kind..."}
                >
                    <MessageInput.Submit onSubmit={sendComment} />
                </MessageInput>
                <Comments items={data ?? []} />
            </Layout.Content>
        </Layout>
    )
}
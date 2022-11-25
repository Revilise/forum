import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";
import ConferenceView from "../../components/conference-view/conferenceView";
import {CommentsGetApi} from "../../features/comments/comments-get-api";
import CommentsPostApi from "../../features/comments/comments-post-api";
import {useRouter} from "next/router";

export const getServerSideProps = redirectUnauthorized;

export default function ConferencePage() {
    const { id } = useRouter().query;

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                <ConferenceView conference_id={id} />
                <h3>COMMENTS</h3>
                <CommentsPostApi conference_id={id} />
                <CommentsGetApi conference_id={id} />
            </Layout.Content>
        </Layout>
    )
}
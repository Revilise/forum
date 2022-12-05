import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";
import {useRouter} from "next/router";
import ConferenceAPI from "../../components/conference-view/ConferenceAPI";
import CommentsAPI from "../../components/comments/CommmentsAPI";

export const getServerSideProps = redirectUnauthorized;

export default function ConferencePage() {
    const { id } = useRouter().query;

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                <ConferenceAPI conference_id={id} />
                <h3>COMMENTS</h3>
                <CommentsAPI conference_id={id} />
            </Layout.Content>
        </Layout>
    )
}
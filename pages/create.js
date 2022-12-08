import Layout from "../components/layout/Layout";
import ConferenceEditor from "../features/conference-editor/ConferenceEditor";
import {roleTypes} from "../lib/roles/roleTypes";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function CreatePage({user}) {
    return (
        <Layout title={"create"} user={user}>
            <Layout.Content>
                <ConferenceEditor />
            </Layout.Content>
        </Layout>
    )
}
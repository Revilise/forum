import Layout from "../components/layout/Layout";
import ConferenceEditor from "../features/conference-editor/ConferenceEditor";
import {roleTypes} from "../lib/roles/roleTypes";

export default function CreatePage() {
    return (
        <Layout title={"create"} sidebar={roleTypes.user}>
            <Layout.Content>
                <ConferenceEditor />
            </Layout.Content>
        </Layout>
    )
}
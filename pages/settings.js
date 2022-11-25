import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";

export default function Settings() {
    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                settings
            </Layout.Content>
        </Layout>
    )
}
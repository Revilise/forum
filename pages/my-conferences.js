import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";

export default function MyConferencesPage() {
    return (
        <Layout sidebar={roleTypes.user}>

        </Layout>
    )
}
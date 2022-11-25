import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";

export default function PartInPage() {
    return (
        <Layout sidebar={roleTypes.user}>

        </Layout>
    )
}
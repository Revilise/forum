import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";

export default function Profile() {
    return (
        <Layout sidebar={roleTypes.user}>
           <Layout.Content>
               me
           </Layout.Content>
        </Layout>
    )
}
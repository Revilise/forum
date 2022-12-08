import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function Settings({user}) {
    return (
        <Layout user={user}>
            <Layout.Content>
                settings
            </Layout.Content>
        </Layout>
    )
}
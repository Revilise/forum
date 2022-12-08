import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";
import SearchAPI from "../components/search/SearchAPI";
import BreadcrumbAPI from "../components/breadcrumb/BreadcrumbAPI";

export const getServerSideProps = redirectUnauthorized;

export default function IndexPage({user}) {
    return (
        <Layout title={"forum/all"} user={user}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <SearchAPI/>
                    <BreadcrumbAPI/>
                </Layout.HorizontalPanel>
                <ConferenceListAPI/>
            </Layout.Content>
        </Layout>
    )
}
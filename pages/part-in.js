import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import SearchAPI from "../components/search/SearchAPI";
import BreadcrumbAPI from "../components/breadcrumb/BreadcrumbAPI";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function PartInPage({user}) {
    return (
        <Layout title={"forum/part in"} user={user} >
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <SearchAPI />
                    <BreadcrumbAPI />
                </Layout.HorizontalPanel>
                <ConferenceListAPI route={'get-part-in-list'} />
            </Layout.Content>
        </Layout>
    )
}
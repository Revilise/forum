import Layout from "../components/layout/Layout";
import SearchAPI from "../components/search/SearchAPI";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";
import BreadcrumbAPI from "../components/breadcrumb/BreadcrumbAPI";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function MyConferencesPage({user}) {
    return (
        <Layout user={user} isSidebar={true}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <SearchAPI />
                    <BreadcrumbAPI />
                </Layout.HorizontalPanel>
                <ConferenceListAPI route={'get-my-list'} />
            </Layout.Content>
        </Layout>
    )
}
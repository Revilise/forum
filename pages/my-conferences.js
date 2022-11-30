import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import SearchAPI from "../components/search/SearchAPI";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";
import BreadcrumbAPI from "../components/breadcrumb/BreadcrumbAPI";

export default function MyConferencesPage() {
    return (
        <Layout sidebar={roleTypes.user}>
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
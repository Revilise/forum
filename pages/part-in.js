import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import SearchAPI from "../components/search/SearchAPI";
import BreadcrumbAPI from "../components/breadcrumb/BreadcrumbAPI";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";

export default function PartInPage() {
    return (
        <Layout sidebar={roleTypes.user}>
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
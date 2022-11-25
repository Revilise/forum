import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";
import ConferenceListAPI from "../features/conference-list/ConferenceListAPI";
import SearchAPI from "../components/search/SearchAPI";

export const getServerSideProps = redirectUnauthorized;

const links = [
    { href: "/", text: "all" },
    { href: "/my-conferences", text: "my conferences"},
    { href: "/part-in", text: "part in conferences"}
]

export default function IndexPage() {
    return (
        <Layout title={"forum"} sidebar={roleTypes.user}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <SearchAPI />
                    <Breadcrumb items={links} />
                </Layout.HorizontalPanel>
                <ConferenceListAPI />
            </Layout.Content>
        </Layout>
    )
}
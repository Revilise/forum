import Layout from "../components/layout/Layout";
import {roleTypes} from "../lib/roles/roleTypes";
import Search from "../components/search/Search";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ConferenceList from "../components/conference-list/ConferenceList";
import redirectUnauthorized from "../lib/auth/redirectUnauthorized";
import useUser from "../lib/auth/useUser";

export const getServerSideProps = redirectUnauthorized;

export default function IndexPage() {

    const links = [
        { href: "/", text: "all" },
        { href: "/my-conferences", text: "my conferences"},
        { href: "/part-in", text: "part in conferences"}
    ]

    const items = [
        { id: 1, title: "title", date: "10-01-2020", content: "content is here".repeat(50), vote: 1 }
    ]

    return (
        <Layout title={"forum"} sidebar={roleTypes.user}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <Search />
                    <Breadcrumb items={links} />
                </Layout.HorizontalPanel>
                <ConferenceList items={items} />
            </Layout.Content>
        </Layout>
    )
}
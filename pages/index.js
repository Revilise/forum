  import Layout from "../components/layout/Layout";
  import {roleTypes} from "../lib/roles/roleTypes";
  import Search from "../components/search/Search";
  import Breadcrumb from "../components/breadcrumb/Breadcrumb";

export default function IndexPage() {
    const items = [
        { href: "/", text: "all" },
        { href: "/my-conferences", text: "my conferences"},
        { href: "/part-in", text: "part in conferences"}
    ]

    return (
        <Layout title={"forum"} sidebar={roleTypes.user}>
            <Layout.Content>
                <Layout.HorizontalPanel>
                    <Search />
                    <Breadcrumb items={items} />
                </Layout.HorizontalPanel>
            </Layout.Content>
        </Layout>
    )
}
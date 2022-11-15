  import Layout from "../components/layout/Layout";
  import {roleTypes} from "../lib/roles/roleTypes";
  import Search from "../components/search/Search";

export default function IndexPage() {
    return (
        <Layout title={"forum"} sidebar={roleTypes.user}>
            <Layout.Content>
                <Search />
            </Layout.Content>
        </Layout>
    )
}
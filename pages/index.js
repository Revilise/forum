  import Layout from "../components/layout/Layout";
  import SidebarFactory from "../components/sidebar/Sidebar";
  import {roleTypes} from "../lib/roles/roleTypes";

export default function IndexPage() {
    return (
        <Layout title={"forum"}>
            <SidebarFactory type={roleTypes.user} />
        </Layout>
    )
}
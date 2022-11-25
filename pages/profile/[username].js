import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import {useRouter} from "next/router";

export default function Profile() {
    const router = useRouter();
    const { username } = router.query;

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                { username }
            </Layout.Content>
        </Layout>
    )
}
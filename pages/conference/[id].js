import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";

export default function ConferencePage() {
    const router = useRouter();

    const { id } = router.query;

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                <p>{id}</p>
            </Layout.Content>
        </Layout>
    )
}
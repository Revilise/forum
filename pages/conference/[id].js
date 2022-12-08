import Layout from "../../components/layout/Layout";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";
import {useRouter} from "next/router";
import ConferenceAPI from "../../components/conference-view/ConferenceAPI";
import CommentsAPI from "../../components/comments/CommmentsAPI";
import Button from "../../components/button/Button";

export const getServerSideProps = redirectUnauthorized;

export default function ConferencePage({user}) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout user={user}>
            <Layout.Content>
                <Button onClick={() => router.back()} children={"<-- back"} />
                <ConferenceAPI conference_id={id} />
                <h3>COMMENTS</h3>
                <CommentsAPI conference_id={id} />
            </Layout.Content>
        </Layout>
    )
}
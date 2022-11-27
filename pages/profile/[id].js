import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import {useRouter} from "next/router";
import ProfileCard from "../../components/profile-card/ProfileCard";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";
import useSWR from "swr";

export const getServerSideProps = redirectUnauthorized;

export default function Profile() {
    const router = useRouter();
    const { id } = router.query;
    const { data: user } = useSWR(`/api/user/${id}`);

    return (
        <Layout sidebar={roleTypes.user}>
            <Layout.Content>
                <ProfileCard user={user} />
            </Layout.Content>
        </Layout>
    )
}
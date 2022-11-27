import Layout from "../../components/layout/Layout";
import {roleTypes} from "../../lib/roles/roleTypes";
import ProfileCard from "../../components/profile-card/ProfileCard";
import useUser from "../../lib/hooks/useUser";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function Profile() {
    const { user } = useUser({redirectTo: "/login"});

    return (
        <Layout sidebar={roleTypes.user}>
           <Layout.Content>
               <ProfileCard user={user} editable={true} />
           </Layout.Content>
        </Layout>
    )
}
import Layout from "../../components/layout/Layout";
import ProfileCard from "../../components/profile-card/ProfileCard";
import redirectUnauthorized from "../../lib/auth/redirectUnauthorized";

export const getServerSideProps = redirectUnauthorized;

export default function Profile({user}) {
    return (
        <Layout title={user.name} user={user}>
           <Layout.Content>
               <ProfileCard user={user} editable={true} />
           </Layout.Content>
        </Layout>
    )
}
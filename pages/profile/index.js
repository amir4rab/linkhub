import { getSession } from 'next-auth/client';
import { getUser } from './../../libs/mongoDb/mongoDb';
import UserProfile from "../../components/userProfile/userProfile";

function ProfilePage({ userData }) {
    return (
        <UserProfile userData={ userData } isOwner={ true } />
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if( session === null ) return {
        redirect: {
            destination: '/login',
            parament: false,
        },
    }

    const user = await getUser(session.user.email);

    console.log(user);

    return {
        props: { userData: { ...user } },
    }
}

export default ProfilePage;

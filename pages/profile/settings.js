import { useRouter } from 'next/router';

import { getUser } from './../../libs/mongoDb/mongoDb';
import { getSession, signOut } from 'next-auth/client';

import UserSettings from '../../components/userSettings/userSettings';

function ProfileSettings({ userData }) { 
    const router = useRouter();
    return (
        <UserSettings queries={ router.query } userData={ userData } />
    );
};

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

export default ProfileSettings;

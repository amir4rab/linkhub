import React from 'react';
import UserProfile from '../../components/userProfile/userProfile';
import { getUserForClient } from './../../libs/mongoDb/mongoDb';

function userPage({ userData }) {
    // console.log(userData);
    return (
        <UserProfile userData={ userData } />
    );
};

export const getStaticProps = async (context) => {
    const { username } = context.params;
    const userData = await getUserForClient(username);

    return {
        props: {
            userData
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    };
}  

export default userPage;

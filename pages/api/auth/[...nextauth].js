import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { addUser } from './../../../libs/mongoDb/mongoDb';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn(user) {
            const isNewUser = await addUser(user.email, user.name, user.image);
            const response = isNewUser ? '/waitinglist' : true;
            return response;
        }
    },

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
})
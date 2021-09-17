import { MongoClient } from 'mongodb';
import { userGen } from './../userGen/userGen';

export const dbConnect = async () => {
    const res = await MongoClient.connect(process.env.MONGODB_URL);
    return res;
};

export const addUser = async ( userEmail, name , profileImg ) => {
    const client = await dbConnect();
    let isNew = false;
    try {
        const db = client.db();

        const oldUser = await db.collection('users').findOne({ email: userEmail });

        if ( oldUser === undefined ) {
            // await db.collection('users').insertOne(userGen(userEmail, name, profileImg)); //* disabling singing up do to moderation reasons *//
            isNew = true;
        }

        client.close();
    } 
    catch {
        client.close();
    }
    return isNew;
}

export const getUser = async ( userEmail ) => {
    const client = await dbConnect();
    try {
        const db = client.db();

        const user = await db.collection('users').findOne({ email: userEmail });
        
        client.close();

        const userWOId = {
            email: user.email,
            id: user.id,
            socials: user.socials,
            profile: user.profile
        }

        return userWOId;
    } 
    catch {
        client.close();
    }
}

export const getUserForClient = async ( username ) => {
    const client = await dbConnect();
    try {
        const db = client.db();

        const user = await db.collection('users').findOne({ id: username });
        
        client.close();

        const userWOId = {
            id: user.id,
            socials: user.socials,
            profile: user.profile
        }

        return userWOId;
    } 
    catch {
        client.close();
    }
}
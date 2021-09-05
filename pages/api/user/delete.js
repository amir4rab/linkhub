import { getSession } from 'next-auth/client';
import { dbConnect } from '../../../libs/mongoDb/mongoDb';

const handler = async (req, res) => {    
    if(req.method !== 'DELETE') {
        res.status(400).json({
            res: 'only "DELETE" is available in this route!'
        })
        res.end();
        return;
    };
    let errorBody = 'something went wrong!';
    const session = await getSession({ req });
    
    // checking if user is logged in or not
    if( session ) { // into this if, if the user inputted stuff and user is in active session.
        // connecting to database
        const client = await dbConnect();
        const db = client.db();
        try {
            // selecting database
            const collection = db.collection('users');

            // getting users previous data from database
            const query = { email: session.user.email };
            
            await collection.deleteOne(query);

            client.close();
            res.status(200).json({
                res: 'successful operation!'
            });
        } catch {
            // catching error in main
            client.close();
            console.log('into catch', errorBody)
            res.status(304).json({
                err: errorBody
            });
        }
    } else {
        // Not singedIn
        res.status(401).json({
            err: 'not authenticated!'
        })
    };
    res.end();
};

export default handler;
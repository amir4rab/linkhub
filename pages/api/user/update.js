// import userData from './userData.json';
import { getSession } from 'next-auth/client';
import { dbConnect } from '../../../libs/mongoDb/mongoDb';
import { validateInput, looseValidateInput, isNum } from '../../../libs/validateInput/validateInput';

const validateSocials = (dataArr, errorBody) => dataArr.map(item => {
    if ( !checkIfItemIsValid(item) ) {
        errorBody = 'false social items!';
        throw new Error(errorBody);
        // return;
    }
    return ({
        'name': item.name,
        'id': item.id,
        'instance': item.instance,
        'label': item.label
    });
})

const checkIfItemIsValid = (dataObj) => {
    console.log(dataObj)
    const objKeys = Object.keys(dataObj);
    if( objKeys.includes(['name', 'id', 'instance', 'label']) ) return false;
    if( objKeys.length === 4 ) return false;
    let allItemsAreValid = true;
    objKeys.every(item => {
        console.log(dataObj[item])
        return true;
        // if ( ( typeof(dataObj[item]) === String || typeof(dataObj[item]) === Boolean ) && validateInput(dataObj[item]) ) return true;
        // allItemsAreValid = false;
        // return false;
    })
    return allItemsAreValid;
};

const handler = async (req, res) => {    
    if(req.method !== 'PUT') {
        res.status(400).json({
            res: 'only PUT is available in this route!'
        })
        res.end();
        return;
    };

    let errorBody = 'something went wrong!';
    const session = await getSession({ req });
    
    if( session && req.body.length !== 0 ) {
        try {
            const reqBody = await JSON.parse(req.body);
            console.log(reqBody);

            const client = await dbConnect();
            const db = client.db();
            const collection = db.collection('users');

            const filter = { email: session.user.email };
            const userPervData = await collection.findOne(filter);
            const updateDocument = {
                $set: {
                    'profile': {
                        'bg': userPervData.profile.bg,
                        'fullName': userPervData.profile.fullName,
                        'pic': userPervData.profile.pic,
                    }
                }
            }

            if ( reqBody.id !== null ) {
                // check if id is unique
                const userByThatId = await collection.findOne({ id: reqBody.username });
                if( userByThatId === undefined ) {
                    updateDocument.$set.id = reqBody.id;
                } else {
                    errorBody = "that id, isn't available";
                    throw(new Error(errorBody));
                }
            }

            if( reqBody.profile.about !== null ) {
                if ( looseValidateInput(reqBody.profile.about) ) {
                    updateDocument.$set.profile.about = reqBody.profile.about;
                } else {
                    errorBody = 'false value for about';
                    throw(new Error(errorBody));
                }
            }

            if ( reqBody.profile.location !== null ) {
                const locationSplitted = reqBody.profile.location.split(' - ');
                if ( validateInput(locationSplitted[0]) && validateInput(locationSplitted[1]) ){
                    updateDocument.$set.profile.location = reqBody.profile.location;
                } else {
                    errorBody = 'false values for location';
                    throw(new Error(errorBody));
                }
            }

            console.log(reqBody.profile.bg);
            if ( reqBody.profile.bg !== null ) {
                if ( isNum(reqBody.profile.bg) ){
                    updateDocument.$set.profile.bg = reqBody.profile.bg;
                } else {
                    errorBody = 'false value for bg';
                    throw(new Error(errorBody));
                }
            }

            // validating social links 
            if( reqBody.socials !== null ) {
                const validatedArr = validateSocials(reqBody.socials, errorBody);
                updateDocument.$set.socials = validatedArr;
            }

            const results = await collection.updateOne(filter,updateDocument);

            console.log(results);
            res.status(200).json({
                res: 'successful operation!'
            });
        } catch {
            // catching error in main
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
    }
    res.end();
};

export default handler;
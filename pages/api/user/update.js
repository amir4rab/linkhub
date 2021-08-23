// import userData from './userData.json';
import { getSession } from 'next-auth/client';
import { dbConnect } from '../../../libs/mongoDb/mongoDb';
import { validateInput, validateSocialArrItem, looseValidateInput, isNum } from '../../../libs/validateInput/validateInput';

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
    const objKeys = Object.keys(dataObj);
    if( objKeys.includes(['name', 'id', 'instance', 'label']) ) return false;
    if( objKeys.length !== 4 ) return false;
    let allItemsAreValid = true;
    objKeys.every(item => {
        console.log(dataObj[item]);
        if ( typeof(dataObj[item]) === 'boolean' ) {
            return true;
        } else if ( typeof(dataObj[item]) === 'string' && validateSocialArrItem(dataObj[item]) ) {
            return true;
        } else {
            allItemsAreValid = false;
            return false;
        };
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
    
    // checking if user is logged in or not
    if( session && req.body.length !== 0 ) {
        try {
            // getting request body 
            const reqBody = await JSON.parse(req.body);
            
            // connecting to database
            const client = await dbConnect();
            const db = client.db();
            const collection = db.collection('users');

            // getting users previous data from database
            const filter = { email: session.user.email };
            const userPervData = await collection.findOne(filter);
            
            // skeleton of data object 
            const updateDocument = {
                $set: {
                    'profile': {
                        'bg': userPervData.profile.bg,
                        'fullName': userPervData.profile.fullName,
                        'pic': userPervData.profile.pic,
                    }
                }
            };

            // validating id section 
            if ( reqBody.id !== null ) {
                if ( id === 'test' ) {
                    errorBody = "that id, isn't available";
                    throw(new Error(errorBody));
                };
                
                // check if id is unique
                const userByThatId = await collection.findOne({ id: reqBody.username });
                if( userByThatId === undefined ) {
                    updateDocument.$set.id = reqBody.id;
                } else {
                    errorBody = "that id, isn't available";
                    throw(new Error(errorBody));
                }
            }

            // validating about section 
            if( reqBody.profile.about !== null ) {
                if ( looseValidateInput(reqBody.profile.about) ) {
                    updateDocument.$set.profile.about = reqBody.profile.about;
                } else {
                    errorBody = 'false value for about';
                    throw(new Error(errorBody));
                }
            }

            // validating profile location section
            if ( reqBody.profile.location !== null ) {
                const locationSplitted = reqBody.profile.location.split(' - ');
                if ( validateInput(locationSplitted[0]) && validateInput(locationSplitted[1]) ){
                    updateDocument.$set.profile.location = reqBody.profile.location;
                } else {
                    errorBody = 'false values for location';
                    throw(new Error(errorBody));
                }
            }

            // validating bg section ( theme ) 
            if ( reqBody.profile.bg !== null ) {
                if ( isNum(reqBody.profile.bg) ){
                    updateDocument.$set.profile.bg = reqBody.profile.bg;
                } else {
                    errorBody = 'false value for bg';
                    throw(new Error(errorBody));
                }
            }

            // validating social links  section
            if( reqBody.socials !== null ) {
                try {
                    const validatedArr = validateSocials(reqBody.socials, errorBody);
                    updateDocument.$set.socials = validatedArr;
                } catch {
                    errorBody = 'error in validating the social arr!';
                    throw(new Error(errorBody));
                }
            }

            await collection.updateOne(filter,updateDocument);

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
    };
    res.end();
};

export default handler;
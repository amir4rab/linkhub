import { useState } from 'react'
import PrimaryBtn from '../../../buttons/primaryBtn';
import classes from './deleteAccountSection.module.scss';
import { signOut } from 'next-auth/client';

function DeleteAccountSection({ userId }) {
    const [ isValid, setIsValid ] = useState(false);
    const checkInputToUserName = (e) => {
        if ( e.target.value.toLowerCase() === userId.toLowerCase() ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }
    const removeApiCall = () => {
        fetch( '/api/user/delete', { method: 'Delete' } )
            .then( _ => signOut() )
            // .then( _ => console.log('done!') )
            .catch( err => console.log(err) );
    }
    return (
        <div className={ classes.deleteAccountSection }>
            <label
                className={ classes.label } 
                htmlFor="userNameConfirmationForAccountRemoval">
                Please type your username({userId}), to delete your account
            </label>
            <div className={ classes.inputArea }>
                <input onChange={ checkInputToUserName } type="text" className={ classes.input } />
                <PrimaryBtn color='red' disabled={ !isValid } onClick={ removeApiCall }>
                    delete account
                </PrimaryBtn>
            </div>
        </div>
    );
};

export default DeleteAccountSection;

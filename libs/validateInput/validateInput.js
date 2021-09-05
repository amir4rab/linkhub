const labelRegex = /^[A-Za-z0-9_-\s]+$/;
const idRegex = /^[A-Za-z0-9_]+$/;
const numRegex = /^[0-9]+$/;
const textRegex = /^[A-Za-z0-9_-\s]+$/;

export const validateInput = ( input, maxLength = 24, isId = false ) => {
    if ( isId ){
        if ( idRegex.exec(input) && input.length < maxLength ) {
            return true;
        } else {
            return false;
        };
    } else {
        if ( labelRegex.exec(input) ) {
            return true;
        } else {
            return false;
        };
    }
}

export const looseValidateInput = (input, maxLength = 150 ) =>  ( textRegex.exec(input) && input.length < maxLength );

export const isNum = (input) => numRegex.test(input);

export const validateSocialArrItem = ( input, isId = false ) => {
    if( isId ) {
        if ( idRegex.exec(input) ) {
            return true;
        } else {
            return false;
        };
    } else {
        if ( labelRegex.exec(input) ) {
            return true;
        } else {
            return false;
        };
    }
}
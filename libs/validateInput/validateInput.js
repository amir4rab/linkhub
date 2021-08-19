export const validateInput = (input, maxLength = 24 ) => {
    const regex = /^[0-9a-zA-Z ]+$/g;
    if ( regex.exec(input) && input.length < maxLength ) {
        return true;
    } else {
        return false;
    };
}

export const loosseValidateInput = (input, maxLength = 150 ) => {
    const regex = /^[0-9a-zA-Z .  , : ;]+$/g;
    if ( regex.exec(input) && input.length < maxLength ) {
        return true;
    } else {
        return false;
    };
}
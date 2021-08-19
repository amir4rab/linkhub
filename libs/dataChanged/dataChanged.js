export const compareUsersSocials = ( firstArr, secondArr ) => {
    if(firstArr.length !== secondArr.length) return false;
    let areEqual = true;
    // if(firstArr.length !== secondArr.length && )
    firstArr.every(item => {
        let itemWasInTheArr = false;
        secondArr.every(sItem => {
            if( sItem.instance === item.instance ) {
                itemWasInTheArr = true;
                return false;
            } else {
                return true;
            }
        });
        if( !itemWasInTheArr ){
            areEqual = false;
            return false;
        } else {
            return true
        }
    })
    return areEqual
}

export const dataChanged = ( firstObj , secondObj ) => {
    // console.log(firstObj , secondObj);
    if( firstObj.id !== secondObj.id ) return true;
    if( firstObj.profile.about !== secondObj.profile.about ) return true;
    if( firstObj.profile.location !== secondObj.profile.location ) return true;
    if( firstObj.profile.fullName !== secondObj.profile.fullName ) return true;
    if( firstObj.profile.bg !== secondObj.profile.bg ) return true;
    if( !compareUsersSocials( firstObj.socials , secondObj.socials ) ) return true;
    return false;
}

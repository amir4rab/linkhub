import { voidSocialItem } from './../userGen/socialItem';

const dataChangedDebugger = ( firstObj , secondObj ) => {
    if( firstObj.id !== secondObj.id ) console.log(`id is different!`, firstObj.id, secondObj.id );
    if( firstObj.profile.about !== secondObj.profile.about ) console.log(`about is different!`, firstObj.profile.about, secondObj.profile.about );
    if( firstObj.profile.location !== secondObj.profile.location ) console.log(`location is different!`, firstObj.profile.location, secondObj.profile.location );
    if( firstObj.profile.fullName !== secondObj.profile.fullName ) console.log(`fullName is different!`, firstObj.profile.fullName, secondObj.profile.fullName);
    if( firstObj.profile.bg !== secondObj.profile.bg ) console.log(`bg is different!`, firstObj.profile.bg, secondObj.profile.bg );
    if( !compareUsersSocials( firstObj.socials , secondObj.socials ) ) console.log(`socials is different!`, firstObj.socials, secondObj.socials);
}

export const compareUsersSocials = ( firstArr, secondArr ) => {
    if(firstArr.length !== secondArr.length) return false;
    let areEqual = true;
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
    // console.log(dataChangedDebugger(firstObj , secondObj));
    if( firstObj.id !== secondObj.id ) return true;
    if( firstObj.profile.about !== secondObj.profile.about ) return true;
    if( firstObj.profile.location !== secondObj.profile.location ) return true;
    if( firstObj.profile.fullName !== secondObj.profile.fullName ) return true;
    if( firstObj.profile.bg !== secondObj.profile.bg ) return true;
    if( !compareUsersSocials( firstObj.socials , secondObj.socials ) ) return true;
    return false;
}

export const changedItems = ( newObj, oldObj ) => {
    const resSocialItem = new voidSocialItem();

    if( oldObj.id !== newObj.id ) resSocialItem.updateItem('id', newObj.id);
    if( oldObj.profile.about !== newObj.profile.about ) resSocialItem.updateItem('about', newObj.profile.about);
    if( oldObj.profile.location !== newObj.profile.location ) resSocialItem.updateItem('location', newObj.profile.location);
    if( oldObj.profile.fullName !== newObj.profile.fullName ) resSocialItem.updateItem('fullName', newObj.profile.fullName);
    if( oldObj.profile.bg !== newObj.profile.bg ) resSocialItem.updateItem('bg', newObj.profile.bg);
    if( !compareUsersSocials( oldObj.socials , newObj.socials ) ) resSocialItem.updateItem('socials', newObj.socials);

    return resSocialItem.getObj();
}
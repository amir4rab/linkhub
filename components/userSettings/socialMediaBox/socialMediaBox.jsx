import { useState, useEffect } from 'react'
import SocialMediaPopup from '../../socialMediaPopup/socialMediaPopup';
import SocialItem from './socialItem/socialItem';
import classes from './socialMediaBox.module.scss';

function SocialMediaBox({ socialArr, setSocialArr, addItemCall }) {
    const [ displayPopup, setDisplayPopup ] = useState(false);

    useEffect( _ => {
        if( addItemCall === 'addSocial' ) addNewSocialEvent();
    }, [ addItemCall ]);

    const addToList = (obj) => {
        setSocialArr(oldArr => ([
            obj,
            ...oldArr
        ]))
    }
    const removeFromList = (instance) => {
        setSocialArr(oldArr => ([
            ...oldArr.filter(arrItem => arrItem.instance !== instance)
        ]))
    }

    const addNewSocialEvent = () => {
        setDisplayPopup(true);
    }

    return (
        <div className={ classes.socialMediaBox }>
            {
                socialArr.map(socialMedia => <SocialItem data={ socialMedia } deleteItem={ removeFromList } key={ socialMedia.instance } />)
            }
            <div className={ classes.addNew }>
                <button className={ classes.addButton } onClick={ addNewSocialEvent }>
                    + Add new social
                </button>
            </div>
            <SocialMediaPopup submitEvent={ addToList } displayPopup={ displayPopup } setDisplayPopup={ setDisplayPopup }  />
        </div>
    )
}

export default SocialMediaBox

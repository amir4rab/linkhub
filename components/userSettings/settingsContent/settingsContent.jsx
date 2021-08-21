import { useRef, useState, useEffect } from 'react'
import { signOut } from 'next-auth/client';
import PrimaryBtn from '../../buttons/primaryBtn';
import SocialMediaBox from '../socialMediaBox/socialMediaBox';
import classes from './settingsContent.module.scss';
import { validateInput as validityChecker, isNum } from '../../../libs/validateInput/validateInput';
import { dataChanged as isUserDataChanged, compareUsersSocials } from '../../../libs/dataChanged/dataChanged';
import LoadingPopup from '../../loadingPopup/loadingPopup';
import ColorPicker from './colorPicker/colorPicker';

const checkBeforeStore = ( value, storingObjFn, errorObjFn, maxLength = 24, isId = false ) => {
    if ( validityChecker(value, maxLength) ) {
        errorObjFn('');
        storingObjFn(value);
    } else if ( value.length === 0 && !isId ) {
        errorObjFn('');
    } else {
        errorObjFn('false values!');
    }
}

const semiCheckBeforeStore = ( value, storingObjFn, errorObjFn, maxLength = 150 ) => {
    const innerValidityChecker = ( input, maxLength ) => {
        const regex = /^[0-9a-zA-Z .  , : ;]+$/g;
        if ( regex.exec(input) && input.length < maxLength ) {
            return true;
        } else {
            return false;
        };
    }

    if ( innerValidityChecker(value, maxLength) ) {
        errorObjFn('');
        storingObjFn(value);
    } else if ( value.length === 0 ) {
        errorObjFn('');
    } else {
        errorObjFn('false values!');
    }
}

function SettingsContent({ userData, activeSection, action }) {
    const [ localUserData, setLocalUserData ] = useState(userData);



    // scrolling to active element //
    const profileRef = useRef();
    const settingsRef = useRef();
    const [ scrolledTo, setScrolledTo ] = useState(null);
    useEffect( _ => {
        switch(activeSection) {
            case 'settings': {
                if (scrolledTo === 'settings') return;
                window.scroll({
                    top: settingsRef.current.offsetTop,
                    behavior: 'smooth'
                });
                setScrolledTo('settings')
                break;
            }
            case 'profile': {
                if (scrolledTo === 'profile') return;
                window.scroll({
                    top: profileRef.current.offsetTop,
                    behavior: 'smooth'
                });
                setScrolledTo('profile')
                break;
            }
        }
    }, [ scrolledTo, setScrolledTo, activeSection ]);

    // data form the form  //
    const [ dataChanged, setDataChanged ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const [ username, setUsername ] = useState(localUserData.id);
    const [ usernameError, setUsernameError ] = useState('');

    const [ fullName, setFullName ] = useState(localUserData.profile.fullName);
    const [ fullNameError, setFullNameError ] = useState('');

    const [ about, setAbout ] = useState(localUserData.profile.about === null ? '' : localUserData.profile.about );
    const [ aboutError, setAboutError ] = useState('');

    const [ locationCountry, setLocationCountry ] = useState(localUserData.profile.location === null ? '' : localUserData.profile.location.split('-')[0] );
    const [ locationCountryError, setLocationCountryError ] = useState('');

    const [ locationCity, setLocationCity ] = useState(localUserData.profile.location === null ? '' : localUserData.profile.location.split('-')[1] );
    const [ locationCityError, setLocationCityError ] = useState('');

    const [ bg, setBg ] = useState(localUserData.profile.bg);

    const [ socialArr, setSocialArr ] = useState(localUserData.socials);

    const [ allValuesAreValid, setAllValuesAreValid ] = useState(true);

    // checking if the data has been changed //
    useEffect( _ => {
        const location = locationCity.length !== 0 && locationCountry.length !== 0 ? `${locationCountry}-${locationCity}` : null;
        if(
            isUserDataChanged({
                id: username,
                profile: {
                    about: about.length === 0 ? null : about,
                    location,
                    fullName,
                    bg,
                },
                socials: socialArr
            }, localUserData)
        ) {
            setDataChanged(true);
        } else {
            setDataChanged(false);
        }
    },[ locationCity, locationCountry, username, socialArr, localUserData, setDataChanged, about, fullName, bg ]);

    // checking if all of input are valid //
    useEffect( _ => {
        if (
            locationCityError.length === 0 &&
            locationCountryError.length === 0 &&
            usernameError.length === 0 &&
            aboutError.length === 0 &&
            fullNameError.length === 0
        ) {
            setAllValuesAreValid(true);
        } else {
            setAllValuesAreValid(false)
        }
    },[ locationCityError, locationCountryError, usernameError, aboutError, setAllValuesAreValid, fullNameError ]);

    // making a api call to the backend to submit new values //
    const submitToApi = () => {
        setIsLoading(true);
        const location = locationCity.length !== 0 && locationCountry.length !== 0 ? `${locationCountry.trim()} - ${locationCity.trim()}` : null;
        fetch(
            '/api/user/update',
            {
                body: JSON.stringify({
                    'id': username === localUserData.id ? null : username,
                    'profile': {
                        'about': about.length === 0 ? null : about,
                        'location': location,
                        'fullName': fullName === localUserData.profile.fullName ? null : fullName,
                        'bg': bg === localUserData.profile.bg ? null : isNum(bg) ? bg : null
                    },
                    'socials': compareUsersSocials(socialArr, localUserData.socials) ? null : socialArr
                }),
                method: 'PUT'
            }
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setLocalUserData({
                    'id': username,
                    'profile': {
                        'about':  about,
                        'location': location,
                        'fullName': fullName,
                        'bg': bg
                    },
                    'socials': socialArr
                })
                setDataChanged(false);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }

    return (
        <div className={ classes.settingsContent }>
            <LoadingPopup isLoading={ isLoading } />
            <div ref={ profileRef } className={ classes.section }>
                {/* title area  */}
                <div className={ classes.titleArea }>
                    <h3 className={ classes.title }>
                        profile
                    </h3>
                    {
                        dataChanged ? 
                        <PrimaryBtn onClick={ submitToApi } color='green' disabled={ !allValuesAreValid }>
                            save changes
                        </PrimaryBtn>
                        : null
                    }
                </div>
                {/* username input  */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        username
                    </h4>
                    <input 
                        type="text" 
                        defaultValue={username}
                        placeholder="this input should not be empty"
                        onChange={ e => checkBeforeStore( e.target.value, setUsername, setUsernameError, 24, true )}
                    />
                    <p className={ classes.help }>
                        your username should only includes normal characters(0 to 9, a to z).
                    </p>
                    {
                        usernameError !== '' ?
                        <p className={ classes.err }>
                            { usernameError }
                        </p> : null
                    }
                </div>
                {/* username input  */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        full name
                    </h4>
                    <input 
                        type="text" 
                        defaultValue={fullName}
                        onChange={ e => checkBeforeStore( e.target.value, setFullName, setFullNameError, 24, true)}
                    />
                    {
                        fullNameError !== '' ?
                        <p className={ classes.err }>
                            { fullNameError }
                        </p> : null
                    }
                </div>
                {/* about input */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        about
                    </h4>
                    <textarea 
                        defaultValue={ about }
                        placeholder='eg: 24 year old frontend developer, based in berlin.'
                        onChange={ e => semiCheckBeforeStore( e.target.value, setAbout, setAboutError, 150 )}
                    />
                    <p className={ classes.help }>
                        Max 150 characters!
                    </p>
                    {
                        aboutError !== '' ?
                        <p className={ classes.err }>
                            { aboutError }
                        </p> : null
                    }
                </div>
                {/* location inputs  */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        location
                    </h4>
                    <div className={ classes.inputBox }>
                        <label htmlFor="locationCountry">
                            Country
                        </label>
                        <input 
                            type="text" 
                            name="locationCountry"
                            placeholder="Germany"
                            defaultValue={ locationCountry }
                            onChange={ e => checkBeforeStore( e.target.value, setLocationCountry, setLocationCountryError )}
                        />
                    </div>
                    <div className={ classes.inputBox }>
                        <label htmlFor="locationCity">
                            City
                        </label>
                        <input 
                            type="text" 
                            name="locationCity"
                            placeholder="Berlin"
                            defaultValue={ locationCity }
                            onChange={ e => checkBeforeStore( e.target.value, setLocationCity, setLocationCityError )} 
                        />
                        {
                            locationCityError !== '' || locationCountryError !== '' ?
                            <p className={ classes.err }>
                                invalid values
                            </p> : null
                        }
                    </div>
                </div>
                {/* color picker  */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        account theme
                    </h4>
                    <ColorPicker activeColor={bg} setColor={setBg} />
                </div>
                {/* social media box */}
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        Social medias
                    </h4>
                    <SocialMediaBox addItemCall={ action } socialArr={ socialArr } setSocialArr={ setSocialArr } />
                </div>
            </div>
            <div ref={ settingsRef } className={ classes.section }>
                <div className={ classes.titleArea }>
                    <h3 className={ classes.title }>
                        Settings
                    </h3>
                </div>
                <div className={ classes.box }>
                    <h4 className={ classes.subTitle }>
                        manage account
                    </h4>
                    <div className={ classes.btnArea }>
                        <PrimaryBtn color='red' onClick={ signOut }>
                            sign out
                        </PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsContent;

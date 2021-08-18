import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import classes from './userProfile.module.scss';

import MobileDetails from './mobileDetails/mobileDetails';
import DesktopDetails from './desktopDetails/desktopDetails';
import settingsIcon from './../../public/icons/light/settingsIcon.svg'

function UserProfile({ userData, isOwner }) {
    // const [ isMobile, setIsMobile ] = useState(true);
    const [ activeTab, setActiveTab ] = useState(0);


    console.log(userData);

    return (
        <div className={ classes.userProfile }>
            <div className={ classes.header }>
                <div className={ classes.head }>
                    <div className={ classes.image }>
                        <Image src={ userData.profile.pic } layout='fill' alt="profile image" />
                    </div>
                    {
                        isOwner ? 
                        <div className={ classes.headButtons }>
                            <div className={ classes.inner }>
                                <button className={ classes.settingsBtn }>
                                    <Link
                                        href={{
                                            pathname: '/profile/settings',
                                            query: { a: 'profile' }
                                        }}     
                                    >
                                        Edit profile
                                    </Link>
                                </button>
                                <button className={ classes.settingsBtn }>
                                    <Link 
                                        href={{
                                            pathname: '/profile/settings',
                                            query: { a: 'settings' }
                                        }} 
                                        passHref
                                    >
                                        <Image className={ classes.innerImage } src={ settingsIcon } alt='settings'/>
                                    </Link>
                                </button>
                            </div>
                        </div> : null
                    }
                </div>
                {
                    
                    <div className={ classes.details }>
                        <div className={ classes.personal }>
                            <h1 className={ classes.fullName }>
                                { userData.profile.fullName }
                            </h1>
                            <h3 className={ classes.id }>
                                @{ userData.id }
                            </h3>
                        </div>
                        <div className={ classes.tabs }>
                            <button 
                                className={ activeTab === 0 ? classes.activeBtn : classes.btn }
                                onClick={ _ => setActiveTab(0) }
                            >
                                Links
                            </button>
                            <button 
                                className={ activeTab === 1 ? classes.activeBtn : classes.btn }
                                onClick={ _ => setActiveTab(1) }
                            >
                                about
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className={ classes.info }>
                {/* {
                    isMobile ?
                    <MobileDetails userData={ userData } activeTab={ activeTab } /> : null
                }
                {
                    isMobile ? 
                    <DesktopDetails userData={ userData } /> : null
                } */}
                <MobileDetails isOwner={ isOwner } userData={ userData } activeTab={ activeTab } />
                <DesktopDetails isOwner={ isOwner } userData={ userData } />
            </div>
        </div>
    );
};

export default UserProfile;

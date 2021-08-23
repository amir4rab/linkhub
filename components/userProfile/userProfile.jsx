import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getClassByIndex } from './../../libs/themeManager/themeManager';

import classes from './userProfile.module.scss';

import MobileDetails from './mobileDetails/mobileDetails';
import DesktopDetails from './desktopDetails/desktopDetails';
import SettingsBtn from '../buttons/settingsBtn';

function UserProfile({ userData, isOwner }) {
    const [ activeTab, setActiveTab ] = useState(0);
    return (
        <div className={ getClassByIndex(userData.profile.bg, classes) }>
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
                                <SettingsBtn />
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
                            {
                                isOwner ?
                                <button
                                    className={ classes.btn }
                                >
                                    <Link href='/profile/settings'>
                                        Edit profile
                                    </Link>
                                </button> : null
                            }
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
                <MobileDetails color={ userData.profile.bg } isOwner={ isOwner } userData={ userData } activeTab={ activeTab } />
                <DesktopDetails color={ userData.profile.bg } isOwner={ isOwner } userData={ userData } />
            </div>
        </div>
    );
};

export default UserProfile;

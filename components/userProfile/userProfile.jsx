import { useState } from 'react';
import Image from 'next/image'
import classes from './userProfile.module.scss';
import MobileDetails from './mobileDetails/mobileDetails';
import DesktopDetails from './desktopDetails/desktopDetails';

function UserProfile({ userData }) {
    const [ isMobile, setIsMobile ] = useState(true);
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
                        false ? 
                        <div>
                            more settings
                        </div> : null
                    }
                </div>
                {
                    isMobile ?
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
                    </div> : null
                }
            </div>
            <div className={ classes.info }>
                {
                    isMobile ?
                    <MobileDetails userData={ userData } activeTab={ activeTab } /> : null
                }
                {
                    isMobile ? 
                    <DesktopDetails userData={ userData } /> : null
                }
            </div>
        </div>
    );
};

export default UserProfile;

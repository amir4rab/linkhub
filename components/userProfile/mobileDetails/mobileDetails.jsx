import Link from 'next/link';

import classes from './mobileDetails.module.scss';
import SocialLink from '../socialLink/socialLink';

function MobileDetails({ userData, activeTab, isOwner, color }) {

    return (
        <div className={ classes.mobileDetails }>
            <div
                className={ classes.inner }
                style={{ transform: `translateX(-${ activeTab * 100}vw)` }}
            >
                <div className={ classes.tab }>
                    {
                        userData.socials.map(social => (
                            <SocialLink data={social} color={ color } key={ `m${social.instance}` }/>
                        ))
                    }
                    {
                        userData.socials.length === 0 && isOwner ? 
                        <div className={ classes.box }>
                            <Link
                                href={{
                                    pathname: '/profile/settings',
                                    query: {
                                        a: 'profile',
                                        event: 'addSocial'
                                    }
                                }}
                            >
                                Add your fist item here!
                            </Link>
                        </div> : null
                    }
                </div>
                <div className={ classes.tab }>
                    <div className={ classes.box }>
                        <p className={ classes.title }>
                            { userData.profile.about }
                        </p>
                        {
                            userData.profile.location !== null ?
                            <p className={ classes.location }>&#x2691; { userData.profile.location } </p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileDetails;

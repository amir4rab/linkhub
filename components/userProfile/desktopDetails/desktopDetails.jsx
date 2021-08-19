import Link from 'next/link';

import classes from './desktopDetails.module.scss';
import SocialLink from './../socialLink/socialLink';

function DesktopDetails({ userData, isOwner }) {
    return (
        <div className={ classes.desktopDetails }>
            <div className={ classes.box }>
                <h2 className={ classes.name }>
                    { userData.profile.fullName }
                </h2>
                <h4 className={ classes.id }>
                    @{ userData.id }
                </h4>
                {
                    userData.profile.location !== null ? 
                    <h5 className={ classes.location }>
                        &#x2691; { userData.profile.location }
                    </h5> : null
                }
                {
                    userData.profile.about !== null ? 
                    <p className={ classes.about }>
                        { userData.profile.about }
                    </p> : null
                }
            </div>
            <div className={ classes.linkArea }>
                {
                    userData.socials.map(social => (
                        <SocialLink data={social} key={ `d${social.instance}` }/>
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
        </div>
    );
};

export default DesktopDetails;

import classes from './desktopDetails.module.scss';
import SocialLink from './../socialLink/socialLink';

function DesktopDetails({ userData }) {
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
                        <SocialLink data={social} key={ social.type }/>
                    ))
                }
            </div>
        </div>
    );
};

export default DesktopDetails;

import React from 'react';
import Image from 'next/image';
import classes from './socialLink.module.scss';
import socialLink from './../../../libs/socialLink/socialLink';
import socialLogo from './../../../libs/socialLink/socialLogo';


function SocialLink({ data }) {
    const socialPath = socialLink(data.type, data.id);

    return (
        <div className={ classes.socialLink }>
            <div className={ classes.image }>
                <Image src={ socialLogo(data.type).dark } alt={`${data.type} logo`} width='100%' height='100%'/>
            </div>
            <div className={ classes.mobileLink }>
                {
                    data.displayedText === false ?
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        @{data.id}
                    </a>
                    :
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        { data.displayedText }
                    </a>
                }
            </div>
            <div className={ classes.desktopLink }>
                {
                    data.displayedText === false ?
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        <p className={ classes.main }>@{ data.id }</p>
                        <p className={ classes.sub }>{ socialPath.path }</p>
                    </a>
                    :
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        <p className={ classes.main }>{ data.displayedText }</p>
                        <p className={ classes.sub }>{ socialPath.path }</p>
                    </a>
                }
            </div>
        </div>
    );
};

export default SocialLink;

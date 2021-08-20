import React from 'react';
import Image from 'next/image';
import classes from './socialLink.module.scss';
import { socialLink, socialLogo } from './../../../libs/socialLink/socialArr';


function SocialLink({ data }) {
    const socialPath = socialLink(data.name, data.id);
    // console.log(data);

    return (
        <div className={ classes.socialLink }>
            <div className={ classes.image }>
                <Image src={ socialLogo(data.name).dark } alt={`${data.name} logo`} width='100%' height='100%'/>
            </div>
            <div className={ classes.mobileLink }>
                {
                    data.label === false ?
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        @{data.id}
                    </a>
                    :
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        { data.label }
                    </a>
                }
            </div>
            <div className={ classes.desktopLink }>
                {
                    data.label === false ?
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        <p className={ classes.main }>@{ data.id }</p>
                        <p className={ classes.sub }>{ socialPath.path }</p>
                    </a>
                    :
                    <a target='_blank' rel='noreferrer' href={ socialPath.path }>
                        <p className={ classes.main }>{ data.label }</p>
                        <p className={ classes.sub }>{ socialPath.path }</p>
                    </a>
                }
            </div>
        </div>
    );
};

export default SocialLink;

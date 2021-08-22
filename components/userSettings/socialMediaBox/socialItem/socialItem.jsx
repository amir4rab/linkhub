import Image from 'next/image';
import { socialLink, socialLogo } from '../../../../libs/socialLink/socialArr';
import React from 'react'
import classes from './socialItem.module.scss';

function SocialItem({ data, deleteItem }) {
    return (
        <div className={ classes.socialItem }>
            <div className={ classes.logo }>
                <Image src={ socialLogo(data.name).light } alt={`logo of ${data.name}`}/>
            </div>
            <div className={ classes.main }>
                <p className={ classes.dTitle }>
                    { socialLink(data.name, data.id).path }
                </p>
                <p className={ classes.mTitle }>
                    @{ data.id }
                </p>
            </div>
            <div className={ classes.editBox }>
                <button
                    className={ classes.deleteBtn }
                    onClick={ _ => deleteItem(data.instance) }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SocialItem;

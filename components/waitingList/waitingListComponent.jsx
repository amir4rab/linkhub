/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import classes from './waitingList.module.scss';

const WaitingList = () => {
    return (
        <div className={ classes.waitingList }>
            <h1 className={ classes.title }>
                waiting list
            </h1>
            <div className={ classes.text }>
                <p>
                    Sorry, due to moderation reasons singing-up is disabled by default. feel free to contact me on twitter by <a target='_blank' rel='noreferrer' href="https://twitter.com/amir4rab">@amir4rab</a>, if you're interested in this project.
                </p>
            </div>
        </div>
    );
};

export default WaitingList;

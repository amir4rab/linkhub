import { useState } from 'react';
import Head from 'next/head';
import classes from './userSettings.module.scss';

import SettingsNavbar from './settingsNavbar/settingsNavbar';
import SettingsContent from './settingsContent/settingsContent';

function UserSettings({ queries, userData }) {
    const [ activeSection, setActiveSection ] = useState(queries.a !== undefined ? queries.a : 'profile');
    const [ action, setAction ] = useState(queries.event !== undefined ? queries.event : null);
    return (
        <div className={ classes.userSettings }>
            <Head>
                <title>profile settings</title>
            </Head>
            <h1 className={ classes.title }>
                settings
            </h1>
            <div className={ classes.content }>
                <div className={ classes.leftSide }>
                    <SettingsNavbar 
                        activeSection={ activeSection }
                        setActiveSection={ setActiveSection }
                    />
                </div>
                <div className={ classes.rightSide }>
                    <SettingsContent 
                        userData={ userData } 
                        setAction={ setAction } 
                        activeSection={ activeSection } 
                        action={ action }
                    />
                </div>
            </div>
        </div>
    )
};

export default UserSettings

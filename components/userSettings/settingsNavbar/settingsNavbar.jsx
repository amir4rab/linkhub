import React from 'react'
import classes from './settingsNavbar.module.scss';

function SettingsNavbar({ activeSection, setActiveSection }) {
    const setActiveSectionFn = (value) => {
        setActiveSection(value)
    };

    return (
        <div className={ classes.settingsNavbar }>
            <div className={ classes.linkWrapper }>
                <button
                    className={ activeSection === 'profile' ? classes.activeBtn : classes.btn }
                    onClick={ _ => setActiveSectionFn('profile') }
                >
                    profile
                </button>
            </div>
            <div className={ classes.linkWrapper }>
                <button
                    className={ activeSection === 'settings' ? classes.activeBtn : classes.btn }
                    onClick={ _ => setActiveSectionFn('settings') }
                >
                    settings
                </button>
            </div>
        </div>
    );
};

export default SettingsNavbar;

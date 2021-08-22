import classes from './mobileMenu.module.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mobileMenuIconDark from './../../public/icons/dark/mobileMenuIcon.svg';
import mobileMenuIconLight from './../../public/icons/light/mobileMenuIcon.svg';

import Image from 'next/image';
import MobileMenuOptions from './mobileMenuOptions/mobileMenuOptions';

const overlayVariants = {
    'hidden': {
        x: `100vw`,
        transition: {
            duration: .3,
        }
    },
    'visible': {
        x: 0,
        transition: {
            duration: .3,
        }
    },
};

const findTheme = (router) => {
    if ( router.route.includes('/u/') || ( router.route.includes('/profile') && !router.route.includes('settings')) ){
        return 'dark';
    } else {
        return 'light' 
    }
}

function MobileMenu({ router }) {
    const [ overlayState, setOverlayState ] = useState(false);
    const [ modalVisibility, setModalVisibility ] = useState(false);
    const [ imgColor, setImgColor ] = useState(findTheme(router));

    useEffect(() => {
        setImgColor(findTheme(router));
    }, [ setImgColor, router ]);

    useEffect(() => {
        setOverlayState(false)
    }, [ router.route ]);

    const toggleModal = (e) => 
        e === 'hidden' ? setModalVisibility(false) : null;

    const showModal = ـ => { 
        setOverlayState(true);
        setModalVisibility(true);
    }

    return (
        <div className={ classes.mobileMenu }> 
            <button 
                onClick={ _ => showModal() }
                className={ classes.mobileMenuBtn }
                style={{
                    display: imgColor === 'dark' ? 'block' : 'none'
                }}
            >
                <Image 
                    className={ classes.imgDark } 
                    src={ mobileMenuIconDark } 
                    width="100%" 
                    height="100%" 
                    alt="mobileMenuIcon"
                />
            </button>
            <button 
                onClick={ _ => showModal() }
                className={ classes.mobileMenuBtn }
                style={{
                    display: imgColor === 'light' ? 'block' : 'none'
                }}
            >
                <Image 
                    className={ classes.imgLight } 
                    src={ mobileMenuIconLight } 
                    width="100%" 
                    height="100%"
                    alt="mobileMenuIcon"
                />
            </button>
            {
                modalVisibility ?
                <motion.div 
                    className={ classes.mobileMenuOverlay }
                    variants={ overlayVariants }
                    initial="hidden"
                    animate={ overlayState ? 'visible': 'hidden' }
                    onAnimationComplete= { toggleModal }
                >
                    <MobileMenuOptions closeModal={ _ => setOverlayState(false) } modalIsOpen={ modalVisibility } />
                </motion.div> : null
            }
        </div>
    )
};

export default MobileMenu;

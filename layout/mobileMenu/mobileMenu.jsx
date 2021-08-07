import classes from './mobileMenu.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import mobileMenuIcon from './../../public/icons/dark/mobileMenuIcon.svg';
import Image from 'next/image';

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

function MobileMenu() {
    const [ overlayState, setOverlayState ] = useState(false);
    const [ modalVisibility, setMoadlVisibility ] = useState(false);

    const toggleModal = (e) => 
        e === 'hidden' ? setMoadlVisibility(false) : null;

    const showModal = ـ => { 
        setOverlayState(true);
        setMoadlVisibility(true);
    }

    return (
        <div className={ classes.mobileMenu }> 
            <button 
                onClick={ _ => showModal() }
                className={ classes.mobileMenuBtn }
            >
                <Image src={ mobileMenuIcon } width="100%" height="100%" alt="mobileMenuIcon" />
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
                    <button onClick={ _ => setOverlayState(false) }>
                        close
                    </button>
                </motion.div> : null
            }
        </div>
    )
};

export default MobileMenu;

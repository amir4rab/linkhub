import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classes from './loadingPopup.module.scss';

const variants = {
    'hidden': {
        opacity: 0,
        transition: {
            duration: .3
        }
    },
    'visible': {
        opacity: 1,
        transition: {
            duration: .3
        }
    }
}

function LoadingPopup({ isLoading }) {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect( _ => {
        if ( isLoading === true ) setIsVisible(true);
    },[ setIsVisible, isLoading ]);

    return (
        <>
            {
                isVisible ? 
                <motion.div
                    variants={ variants }
                    animate={ isLoading ? 'visible' : 'hidden' }
                    initial={ 'hidden' }
                    // onAnimationEnd={ e => console.log(e) }
                    onAnimationComplete={ e => e === 'hidden' ? setIsVisible(false) : null }
                    className={ classes.loadingPopup }
                >
                    <div className={ classes.inner }>
                        <div className={ classes.loadingAnimation } />
                    </div>
                </motion.div> : null
            }
        </>
    )
}

export default LoadingPopup

import { useState, useEffect } from 'react'
import { dataArr as socialLinksDataArr , socialLink } from '../../libs/socialLink/socialArr';
import { motion } from 'framer-motion';
import classes from './socialMediaPopup.module.scss';
import SearchBox from './searchBox/searchBox';
import DetailsAdder from './detailsAdder/detailsAdder';

const variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: .3
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .3
        }
    }
}

function SocialMediaPopup({ displayPopup , submitEvent, setDisplayPopup }) {
    const [ hiding, setHiding ] = useState(true);
    useEffect(() => {
        setHiding(!displayPopup);
    }, [displayPopup]);

    const [ stage, setStage ] = useState('search');

    const [ chosenSocialMedia, setChosenSocialMedia ] = useState(null);
    const setSocialMedia = (value) => {
        setChosenSocialMedia(value);
        setStage('addingDetails');
    }

    const goBackToSearch = () => {
        setChosenSocialMedia(null);
        setStage('search');
    }

    const closeFn = (e) => {
        e.target.id === 'overlay' ? setHiding(true) : null
    }

    const submitEventFn = (data) => {
        submitEvent(data);
        setChosenSocialMedia(null);
        setStage('search');
    }

    return (
        <>        
            {
                displayPopup ? 
                <motion.div
                    onClick={ closeFn }
                    id='overlay'
                    initial='hidden'
                    animate={ !hiding ? 'visible' : 'hidden' }
                    variants={ variants }
                    onAnimationComplete={ e => e === 'hidden' ? setDisplayPopup(false) : null }
                    className={ classes.socialMediaPopup }
                >
                    <div className={ classes.inner }>
                        <button className={ classes.exitBtn } onClick={ _ => setHiding(true) }>
                            X
                        </button>
                        {
                            stage === 'search' ? 
                            <SearchBox dataArr={ socialLinksDataArr } setFn={ setSocialMedia } /> : null
                        }
                        {
                            stage === 'addingDetails' ? 
                            <DetailsAdder 
                                dataArr={ socialLinksDataArr } 
                                data={ chosenSocialMedia } 
                                submitEvent={ submitEventFn } 
                                goBack={ goBackToSearch }
                                closePopup={ _ => setDisplayPopup(false) }
                            /> : null
                        }
                    </div>
                </motion.div> : null
            }
        </>
    )
};

export default SocialMediaPopup;

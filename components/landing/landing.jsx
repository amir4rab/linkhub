import Link from 'next/link';
import Image from 'next/image';
import classes from './landing.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import defaultProfile0 from '../../public/images/default-profile-0.png';

const slideFromTopVariants = {
    'hidden':{
        y: -16,
        opacity: 0
    },
    'visible':{
        y: 0,
        opacity: 1
    }
};

const slideFromRightVariants = {
    'hidden':{
        x: -16,
        opacity: 0
    },
    'visible':{
        x: 0,
        opacity: 1
    }
};

const slideFromBottomVariants = {
    'hidden':{
        y: 16,
        opacity: 0
    },
    'visible':{
        y: 0,
        opacity: 1
    }
};

const slideFromLeftVariants = {
    'hidden':{
        x: 16,
        opacity: 0,
    },
    'visible':{
        x: 0,
        opacity: 1,
    }
};


function LandingComponent() {
    const router = useRouter();

    return (
        <div className={ classes.landingComponent }>
            <div className={ classes.leftSide }>
                <motion.h1 
                    variants={ slideFromTopVariants }
                    initial="hidden"
                    animate="visible"
                    className={ classes.title }>
                    Connect Your
                    Pages Together
                </motion.h1>
                <motion.p 
                    className={ classes.subTitle }
                    variants={ slideFromRightVariants }
                    initial="hidden"
                    animate="visible"
                >
                    with linkhub you can connect all of your social life in one page, start by signing up here for free.
                </motion.p>
                <motion.div 
                    className={ classes.btnArea }
                    variants={ slideFromBottomVariants }
                    initial="hidden"
                    animate="visible"
                >
                    <button className={ classes.button }>
                        <Link href='/login'>
                            sing up
                        </Link>
                    </button>
                </motion.div>
            </div>
            <div className={ classes.rightSide }>
                <div className={ classes.imgBox }>
                    <motion.div 
                        variants={ slideFromLeftVariants }
                        initial="hidden"
                        animate="visible"
                        className={ classes.img }
                        onClick={ _ => router.push('/u/test') }
                    >
                        <Image src={ defaultProfile0 } layout="intrinsic" alt='showcase of website' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LandingComponent;

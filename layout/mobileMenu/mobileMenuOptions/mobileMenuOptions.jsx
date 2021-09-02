import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import classes from './mobileMenuOptions.module.scss';

const variants = {
    'hidden': {
        y: -10,
        opacity: 0,
    },
    'visible': i => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
            delay: i * .3
        }
    })
}

function MobileMenuOptions({ closeModal, modalIsOpen }) {
    const [ session, loading ] = useSession();
    // const router = useRouter();

    // console.log(router.route);

    return (
        <div className={ classes.mobileMenuOptions }>
            <motion.div
                className={ classes.linkBox }
                variants={ variants }
                custom={1}
                initial='hidden'
                animate={ modalIsOpen ? 'visible' : 'hidden' }
            >
                <Link href='/'>
                    home
                </Link>
            </motion.div>
            <motion.div
                className={ classes.linkBox }
                variants={ variants }
                custom={2}
                initial='hidden'
                animate={ modalIsOpen ? 'visible' : 'hidden' }
            >
                {
                    loading ? 
                    <div>
                        loading
                    </div> : null
                }
                {
                    !loading && session ?
                    <Link href='/profile'>
                        profile
                    </Link> :
                    <Link href='/login'>
                        login / sign up
                    </Link>
                }
            </motion.div>
            <motion.div
                className={ classes.linkBox }
                variants={ variants }
                custom={3}
                initial='hidden'
                animate={ modalIsOpen ? 'visible' : 'hidden' }
            >
                <Link href='/doc'>
                    doc
                </Link>
            </motion.div>
            <motion.div
                className={ classes.linkBox }
                variants={ variants }
                custom={4}
                initial='hidden'
                animate={ modalIsOpen ? 'visible' : 'hidden' }
            >
                <button
                    onClick={ closeModal }
                >
                    close menu
                </button>
            </motion.div>
        </div>
    );
};

export default MobileMenuOptions;

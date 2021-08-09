import Link from 'next/link';
import classes from './navbarDesktop.module.scss';
import { useSession } from 'next-auth/client';

function NavbarDesktop({ router }) {
    const [ session, loading ] = useSession();

    return (
        <nav className={ router.route.includes('/u/') ? classes.navbarDarkDesktop : classes.navbarDesktop }>
            <div className={ classes.inner }>
                <h3 className={ classes.logo }>
                    <Link href='/'>
                        LinkHub
                    </Link>
                </h3>
                <ul className={ classes.links }>
                    <li className={ classes.link }>
                        <Link href='/'>
                            settings
                        </Link>
                    </li>
                    <li className={ classes.link }>
                        <button className={ classes.userBtn }>
                            {
                                loading ? 
                                <div className={ classes.loadingSpinner } /> : 
                                <div>
                                    {
                                        session ? 
                                        <Link href='/profile'>
                                            profile
                                        </Link> :
                                        <Link href='/login'>
                                            login
                                        </Link>
                                    }
                                </div>
                            }
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarDesktop;

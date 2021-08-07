import Link from 'next/link';
import classes from './navbarDesktop.module.scss';

function NavbarDesktop({ router }) {
    console.log(router);
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
                            profile
                        </Link>
                    </li>
                    <li className={ classes.link }>
                        <Link href='/'>
                            settings
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarDesktop;

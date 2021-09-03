import Link from 'next/link';
import classes from './../styles/error.module.scss';

function Custom500() {
    return (
        <div className={ classes.error }>
            <h1 className={ classes.title }>
                Sorry, something went wrong on server!
            </h1>
            <Link href="/">
                get back to home.
            </Link>
        </div>
    );
};

export default Custom500;

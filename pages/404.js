import Link from 'next/link';
import classes from './../styles/error.module.scss';

function Custom404() {
    return (
        <div className={ classes.error }>
            <h1 className={ classes.title }>
                Sorry, this page does not exist!
            </h1>
            <Link href="/">
                get back to home.
            </Link>
        </div>
    );
};

export default Custom404;

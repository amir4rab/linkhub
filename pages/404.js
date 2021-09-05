import Link from 'next/link';
import classes from './../styles/error.module.scss';

import Head from 'next/head';

function Custom404() {
    return (
        <div className={ classes.error }>
            <Head>
                <title>LinkHub 404</title>
                <meta 
                    name="description" 
                    content="sorry, this page does not exist"
                />
            </Head>
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

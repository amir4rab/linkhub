import Link from 'next/link';
import classes from './../styles/error.module.scss';
import Head from 'next/head';

function Custom500() {
    return (
        <div className={ classes.error }>
            <Head>
                <title>LinkHub 500</title>
                <meta 
                    name="description" 
                    content="sorry, something went wrong on our server"
                />
            </Head>
            <h1 className={ classes.title }>
                Sorry, something went wrong on our server!
            </h1>
            <Link href="/">
                get back to home.
            </Link>
        </div>
    );
};

export default Custom500;

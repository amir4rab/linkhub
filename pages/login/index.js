import Head from 'next/head';
import { getSession, signIn } from 'next-auth/client';
import classes from './loginPage.module.scss';

function LoginPage() {
    return (
        <div className={ classes.loginPage }>
            <Head>
                <title>Login</title>
                <meta 
                    name="description" 
                    content="singin or login to linkhub" 
                />
            </Head>
            <h1 className={ classes.title }>
                Login
            </h1>
            <div className={ classes.loginBox }>
                <h3 className={ classes.subTitle }>
                    login options
                </h3>
                <button
                    className={ classes.btn }
                    onClick={ _ => signIn('google') }
                >
                    sing in with google
                </button>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if( session !== null ) return {
        redirect: {
            destination: '/profile',
            parament: false,
        },
    }

    return {
      props: {}, // will be passed to the page component as props
    }
};

export default LoginPage;

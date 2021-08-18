import '../styles/globals.scss';
import Layout from '../layout/layout';
import { Provider } from 'next-auth/client';
import { UserDataProvider } from './../context/userDataContext/userDataContext';


function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <UserDataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserDataProvider>  
    </Provider>
  );
}

export default MyApp

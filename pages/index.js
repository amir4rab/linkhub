import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import LandingComponent from '../components/landing/landing';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Linkhub</title>
        <meta name="description" content="Connect all of your social medias in one place!" />
        <meta lang="en" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <LandingComponent />
    </div>
  )
}

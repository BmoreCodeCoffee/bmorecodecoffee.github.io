/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from './footer';

import styles from '../styles/styles.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.banner_container}>
        <img src='/bcc_banner_long.svg' alt='' />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from './footer';
import Nav from './nav';

import styles from '../styles/styles.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baltimore Code and Coffee</title>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
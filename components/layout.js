import Head from 'next/head';
import Image from 'next/image'
import bannerPic from '../public/bcc_banner.svg'

import styles from '../styles/styles.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.banner_container}>
        <Image
          src={bannerPic}
          layout='fill'
          objectFit='contain'
          alt=""
        />

      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
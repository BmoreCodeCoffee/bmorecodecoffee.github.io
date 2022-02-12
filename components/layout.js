import Head from 'next/head';
import styles from '../styles/components/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}
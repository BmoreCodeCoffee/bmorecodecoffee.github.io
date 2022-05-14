import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import bannerPic from '../public/bcc_banner.png'

import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <Layout home>
      <div className={styles.banner_container}>
        <Image
          src={bannerPic}
          layout='fill'
          objectFit='contain'
          alt=""
        />
      </div>
    </Layout>
  )
}

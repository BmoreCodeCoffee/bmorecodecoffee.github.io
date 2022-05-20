/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styles from '../styles/styles.module.scss';

export default function Nav() {
  return (
    <nav>
      <banner className={styles.banner_container}>
        <img src='/bcc_banner_long.svg' alt='' />
      </banner>
    </nav>
  )
}
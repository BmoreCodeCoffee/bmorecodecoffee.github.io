/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styles from '../styles/styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link 
        href='https://github.com/orgs/BmoreCodeCoffee/projects/1/views/1'
        passHref>
        <img className={styles.icon} src='/icons/github.svg' alt='Github icon that links to Baltimore Code & Coffee Github' />
      </Link>
      <Link 
        href='https://twitter.com/BmoreCodeCoffee'
        target='_blank'
        passHref>
      <img className={styles.icon} src='/icons/twitter.svg' alt='Twitter icon that links to Baltimore Code & Coffee Twitter' />
      </Link>
    </footer>
  )
}

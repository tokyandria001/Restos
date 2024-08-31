// components/Footer.js
import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {

  return (
    <div className={styles.footer}>
      <footer>
      <div className={styles.welcome}>
      <img src="/img/deco2.png" className={styles.decoration}/>
      </div>
      <div className={styles.trait}></div>
          <div className={styles.mediaIcons}>
            <Link href="#"><img src="/img/facebook.webp" className={styles.image}/></Link>
            <Link href="#"><img src="/img/insta.webp" className={styles.image}/></Link>
            <Link href="#"><img src="/img/link.webp" className={styles.image}/></Link>
            <Link href="#"><img src="/img/twitter.png" className={styles.image}/></Link>
          </div>
      </footer>
    </div>
  );
};

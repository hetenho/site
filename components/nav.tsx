import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work">
            <a className={styles.link}>Experience</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/me">
            <a className={styles.link}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };

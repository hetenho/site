import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work" className={styles.link}>
            Experience
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/me" className={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };

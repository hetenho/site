import React from "react";
import styles from "../styles/nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="/work" className={styles.link}>
            Experience
          </a>
        </li>
        <li className={styles.item}>
          <a href="/me" className={styles.link}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };

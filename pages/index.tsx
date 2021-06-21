import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.png";
import { Nav } from "../components/nav";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Image src={logo} width="32" height="50" alt="Hetenho logo" />
        <Nav />
      </header>
      <main>
        <div className={styles.home}>
          <h4 className={styles.preHeading}>an experienced</h4>
          <h1 className={styles.heading}>fullstack developer</h1>
        </div>
      </main>
    </div>
  );
}

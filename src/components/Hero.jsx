"use client";
import Link from "next/link";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>This is the Home Page</h1>
      <br />
      <nav className={styles.navLinks}>
        <Link href="/user" className={styles.link}>
          User Info
        </Link> || 
        <Link href="/about" className={styles.link}>
          About
        </Link> || 
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

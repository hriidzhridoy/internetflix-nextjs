import Link from "next/link";
import React from "react";
import Header from "./Header";
import styles from "@/app/styles/navbar.module.css";

function Nav() {
  return (
    <nav>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/movie">Movies</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

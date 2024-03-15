import Image from "next/image";
import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Nav from "./Nav";


function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href='./'>
          <Image src="/logo.png" width={250} height={40} />
        </Link>
      </div>
      <Nav/>
    </header>
  );
}

export default Header;

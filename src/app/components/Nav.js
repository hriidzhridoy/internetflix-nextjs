import Link from 'next/link'
import React from 'react'
import Header from './Header'
import styles from "@/app/styles/navbar.module.css";


function Nav() {
  return (
    <nav>
        <ul className={styles.navbarList}>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/movie'>Movies</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
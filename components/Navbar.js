import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <h1 className={styles.navLogo}><a href='/'>QT Coder</a></h1>
            <ul className={styles.rightSideNav}>
                <li className={styles.navItem}>
                    <a href='#experience'>
                        Experience
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href='#projects'>
                        Projects
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

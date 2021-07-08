import React from 'react'
import styles from '../styles/Intro.module.css'
import {motion} from 'framer-motion'

function Intro() {
    return (
        <div className={styles.IntroContainer}>
            <motion.h1 className={styles.title} initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>Frontend Dev</motion.h1>
            <motion.div className={styles.flex} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                <h2 className={styles.caption}>
                    QT Coder
                </h2>
                <p className={styles.desc}>
                    I'm a high school student and I've been coding for a year. I'm always trying to improve myself and get better.
                </p>
            </motion.div>
        </div>
    )
}

export default Intro

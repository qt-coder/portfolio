import React from 'react'
import styles from '../styles/ProjectPage.module.css'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

function QtManage() {
    return (
        <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.h2 className={styles.subtitle} variants={item}>A landing page</motion.h2>
            <motion.a className={styles.title} href='https://github.com/qt-coder/manage-landing-page' target='_empty' variants={item}>QT Manage</motion.a>
            <motion.p className={styles.desc} variants={item}>
                QT Manage is a landing page made in <a>HTML</a>, <a>CSS</a> and vanilla <a>Javascript</a>.
                <br />
                Includes a navbar, hero, features section, testimonials, a call to action and a footer.
                <br />
                <div className={styles.live}>
                    Check it out <a href='https://qtmanage.netlify.app' target='_empty'>live</a>
                </div>
            </motion.p>
            <motion.img src={'/qtmanage.png'} className={styles.preview} variants={item} />
        </motion.div>
    )
}

export default QtManage
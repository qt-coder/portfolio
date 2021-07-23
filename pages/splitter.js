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

function Splitter() {
    return (
        <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.h2 className={styles.subtitle} variants={item}>A website for calculating tips</motion.h2>
            <motion.a className={styles.title} href='https://github.com/qt-coder/tip-calculator' target='_empty' variants={item}>QT Drive</motion.a>
            <motion.p className={styles.desc} variants={item}>
                Splitter is a website for calculating tips made in <a>Next JS</a>.
                <br />
                It includes different percentage multipliers, division between the number of people (hence the name) and responsive design.
                <br />
                <div className={styles.live}>
                    Check it out <a href='https://splittter.netlify.app' target='_empty'>live</a>
                </div>
            </motion.p>
            <motion.img src={'/splitter.png'} className={styles.preview} variants={item} />
        </motion.div>
    )
}

export default Splitter

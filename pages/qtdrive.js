import React from 'react'
import styles from '../styles/ProjectPage.module.css'
import {motion} from 'framer-motion'

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

function Qtdrive() {
    return (
        <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.h2 className={styles.subtitle} variants={item}>A file storage app</motion.h2>
            <motion.a className={styles.title} href='https://github.com/qt-coder/qt-drive' target='_empty' variants={item}>QT Drive</motion.a>
            <motion.p className={styles.desc} variants={item}>
                QT Drive is a file storage system made using <a>Bootstrap</a>, <a>Firebase</a>, and <a>React JS</a>.
                <br/>
                It includes authentication, the ability to upload files, creating folders and more.
                <br/>
                <div className={styles.live}>
                    Check it out <a href='https://qtdrive.netlify.app' target='_empty'>live</a>
                </div>
            </motion.p>
            <motion.img src={'/qtdrivepreview.png'} className={styles.preview} variants={item}/>
        </motion.div>
    )
}

export default Qtdrive

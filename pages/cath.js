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

function Cath() {
    return (
        <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.h2 className={styles.subtitle} variants={item}>A discord bot with a dashboard</motion.h2>
            <motion.a className={styles.title} href='https://github.com/night0721/cath.gq' target='_empty' variants={item}>QT Drive</motion.a>
            <motion.p className={styles.desc} variants={item}>
                Cath.exe is a Discord bot that has a dashboard made in <a>Next JS</a>, <a>Node</a>, and <a>Chakra UI</a>.
                <br />
                It was made in conjunction with a team of other developers, and I led the frontend dashboard creation.
                <br/>
                It includes Discord authentication, the ability to modify commands, and more. 
                <br />
                <div className={styles.live}>
                    Check it out <a href='https://cath.gq' target='_empty'>live</a>
                </div>
            </motion.p>
            <motion.img src={'/cath.png'} className={styles.preview} variants={item}/>
        </motion.div>
    )
}

export default Cath

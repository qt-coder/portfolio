import React from 'react'
import styles from '../styles/Intro.module.css'
import {motion} from 'framer-motion'
import { AiOutlineArrowDown } from 'react-icons/ai'

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

const MotionArrow = motion(AiOutlineArrowDown)

function Intro() {
    return (
        <div className={styles.IntroContainer}>
            <motion.h1 className={styles.title} initial={{ x: '500px' }}
                animate={{ x: '0px' }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>Frontend Dev</motion.h1>
            <motion.div className={styles.flex} variants={container} initial='hidden' animate='visible'>

                <motion.h2 className={styles.caption} initial={{ x: '500px' }} animate={{ x: '0px' }} variants={item}>
                    QT Coder
                </motion.h2>
                <motion.p className={styles.desc} variants={item}>
                    I'm a high school student and I've been coding for a year. I'm always trying to improve myself and get better.
                </motion.p>
            </motion.div>
            <motion.div className={styles.arrowContainer}>
                <MotionArrow/>
            </motion.div>
        </div>
    )
}

export default Intro

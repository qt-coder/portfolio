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

function GithubStats() {
    return (
        <motion.div variants={container} initial='hidden' animate='visible'>
            <motion.h2 className={styles.subtitle} variants={item}>An app that displays your Github Stats</motion.h2>
            <motion.a className={styles.title} href='https://github.com/qt-coder/github-stats' target='_empty' variants={item}>Github Stats</motion.a>
            <motion.p className={styles.desc} variants={item}>
                Github Stats is a web app made in <a>React</a>, and uses the <a>Github API</a>.
                <br />
                It includes the ability to check a user's repositories and their stats, their followers and more.
                <br />
                <div className={styles.live}>
                    Check it out <a href='https://mygithubstats.netlify.app' target='_empty'>live</a>
                </div>
            </motion.p>
            <motion.img src={'/githubstats.png'} className={styles.preview} variants={item} />
        </motion.div>
    )
}

export default GithubStats
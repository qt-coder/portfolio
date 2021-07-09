import React from 'react'
import styles from '../styles/About.module.css'
import { BiRightArrow } from 'react-icons/bi'
import {motion} from 'framer-motion'

function About() {
    return (
        <div className={styles.container} id='about'>
            <div className={styles.leftSide}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.desc}>Hi! I'm qt. I'm currently in high school and I code as a hobby.  <br/>Here are a few technologies I work with:</p>
                <ul className={styles.technologies}>
                    <li><BiRightArrow /> HTML</li>
                    <li><BiRightArrow /> CSS</li>
                    <li><BiRightArrow /> Javascript</li>
                    <li><BiRightArrow /> React</li>
                    <li><BiRightArrow /> Next JS</li>
                </ul>
            </div>
            <div className={styles.rightSide}>
                <motion.img src={'https://avatars.githubusercontent.com/u/65493032?s=60&v=4'} className={styles.pfp} whileHover={{rotate: 1.05, scale: 0.95}}/>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import styles from '../styles/About.module.css'

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.desc}>Hi! I'm qt. I'm currently in high school and I code as a hobby.  <br/>Here are a few technologies I work with:</p>
                <ul className={styles.technologies}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Next JS</li>
                </ul>
            </div>
            <div className={styles.rightSide}>
                <img src={'https://avatars.githubusercontent.com/u/65493032?s=60&v=4'} className={styles.pfp}/>
            </div>
        </div>
    )
}

export default About

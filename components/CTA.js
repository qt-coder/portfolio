import React from 'react'
import styles from '../styles/cta.module.css'

function CTA() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.desc}>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <button>Say hello</button>
        </div>
    )
}

export default CTA

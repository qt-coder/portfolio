import React from 'react'
import styles from '../styles/Timeline.module.css'

const entries = [
    { date: 'May, 2020', title: 'Started Learning Python', desc: 'I started off my programming journey by learning some Python at school, and eventually falling in love with programming.'},
    { date: 'November, 2020', title: 'Learnt Basic Frontend Development', desc: 'I continued on and found an interest in frontend development one day coincidentally when I was toying around with web development in the Flask framework.' },
    { date: 'January, 2021', title: 'Learnt React JS', desc: 'After getting a hang of the basics, I jumped into React JS, a Javascript library for building UIs.' },
    { date: 'May, 2021', title: 'Learnt NEXT JS', desc: 'To further develop my React skills, I decided to learn the NEXT JS framework, which allows for more functionality.' },
]

function Timeline() {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var today = new Date()
    var date = months[today.getMonth()] + ', ' +today.getFullYear()

    return (
        <div className={styles.timelineContainer}>
            <h2 className={styles.subtitle}>My current programming timeline</h2>
            <h1 className={styles.timelineTitle}>My Journey</h1>
            <div className={styles.container}>
                <div className={styles.timeline}>
                    
                </div>
            </div>
        </div>
    )
}

export default Timeline

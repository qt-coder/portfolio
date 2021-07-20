import React from 'react'
import {Timeline as Tm, StyledOcticon} from '@primer/components'
import {FlameIcon} from '@primer/octicons-react'
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
            <h2 className={styles.subtitle}>Timeline</h2>
            <h1 className={styles.timelineTitle}>My Journey</h1>
            <Tm>
                {entries.map((entry, id) => (
                    <Tm.Item key={id}>
                        <Tm.Badge>
                            <StyledOcticon icon={FlameIcon} color='red'/>
                        </Tm.Badge>
                        <Tm.Body className={styles.content}>
                            <b>{entry.title}</b>
                            <br/>
                            <b>{entry.date}</b>
                            <br/>
                            <p>{entry.desc}</p>
                        </Tm.Body>
                    </Tm.Item>
                ))}
                <Tm.Item>
                    <Tm.Badge>
                        <StyledOcticon icon={FlameIcon} color='blue'/>
                    </Tm.Badge>
                    <Tm.Body className={styles.content}>
                        <b>Now</b>
                        <br />
                        <b>{date}</b>
                        <br />
                        <p>There you go! That's my current journey, and I'll be making even more progress very soon!</p>
                    </Tm.Body>
                </Tm.Item>
            </Tm>
        </div>
    )
}

export default Timeline

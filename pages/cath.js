import React from 'react'
import styles from '../styles/ProjectPage.module.css'

function Cath() {
    return (
        <div>
            <h2 className={styles.subtitle}>A discord bot with a dashboard</h2>
            <a className={styles.title} href='https://github.com/night0721/cath.gq' target='_empty'>QT Drive</a>
            <p className={styles.desc}>
                Cath.exe is a Discord bot that has a dashboard made in <a>Next JS</a>, <a>Node</a>, and <a>Chakra UI</a>.
                <br />
                It was made in conjunction with a team of other developers, and I led the frontend dashboard creation.
                <br/>
                It includes Discord authentication, the ability to modify commands, and more. 
                <br />
                <div className={styles.live}>
                    Check it out <a href='https://cath.gq' target='_empty'>live</a>
                </div>
            </p>
            <img src={'/cath.png'} className={styles.preview} />
        </div>
    )
}

export default Cath

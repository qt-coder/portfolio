import React from 'react'
import styles from '../styles/ProjectPage.module.css'

function Qtdrive() {
    return (
        <div>
            <h2 className={styles.subtitle}>A file storage app</h2>
            <a className={styles.title} href='https://github.com/qt-coder/qt-drive' target='_empty'>QT Drive</a>
            <p className={styles.desc}>
                QT Drive is a file storage system made using <a>Bootstrap</a>, <a>Firebase</a>, and <a>React JS</a>.
                <br/>
                It includes authentication, the ability to upload files, creating folders and more.
                <br/>
                <div className={styles.live}>
                    Check it out <a href='https://qtdrive.netlify.app' target='_empty'>live</a>
                </div>
            </p>
            <img src={'/qtdrivepreview.png'} className={styles.preview}/>
        </div>
    )
}

export default Qtdrive

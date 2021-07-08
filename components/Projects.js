import React from 'react'
import styles from '../styles/Projects.module.css'
import { motion } from "framer-motion"

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

const ProjectsList = [
    {title: 'QT Drive', desc: 'A file storage system that uses Firebase and React', link: 'https://qtdrive.netlify.app'},
    {title: 'Cath.exe', desc: 'A Discord bot with a dashboard made in Next JS', link: 'https://cath.gq'},
]

function Project({title, desc, link}) {
    return (
        <motion.a
            id='projects'
            href={link}
            target='_empty'
            variants={item}
            whileHover={{ scale: 0.95, rotate: 1.05 }}
        >
            <div className={styles.project}>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </motion.a>
    )
}

const MotionProject = motion(Project)

function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.subtitle}>Featured Projects</h2>
            <h1 className={styles.projectsTitle}>Projects I've Worked On</h1>
            <motion.div className={styles.projects} variants={container} initial='hidden' animate='visible'>
                {ProjectsList.map((project, index) => (
                    <MotionProject title={project.title} desc={project.desc} link={project.link} key={index}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects

import React, {useState, useEffect} from 'react'
import styles from '../styles/Projects.module.css'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
    {title: 'QT Drive', desc: 'A file storage system that uses Firebase and React', link: '/qtdrive', primary: false},
    {title: 'Cath.exe', desc: 'A Discord bot with a dashboard made in Next JS', link: '/cath', primary: true},
    {title: 'Github Stats', desc: 'A web app that displays your Github Stats', link: '/githubstats', primary: false},
]

function Project({title, desc, link, primary}) {
    
    return (
        <motion.a
            id='projects'
            href={link}
            variants={item}
            whileHover={{ scale: 0.95, rotate: 1.05 }}
        >
            <div className={primary ? styles.primaryProject : styles.secondaryProject}>
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

    const [ref, isVisible] = useInView({ threshold: 0.1 });

    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.subtitle}>Featured Projects</h2>
            <h1 className={styles.projectsTitle}>Projects I've Worked On</h1>
            <motion.div ref={ref} className={styles.projects} variants={container} initial='hidden' animate={isVisible ? "visible" : "hidden"}>
                {ProjectsList.map((project, index) => (
                    <MotionProject title={project.title} desc={project.desc} link={project.link} key={index} primary={project.primary}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects

import React, { useContext } from 'react';

import styles from "./project.module.css";
import projects from "../../datas/projects.json";
import { ProjectCard } from "./projectCard";
import { ThemeContext } from '../../ThemeContext';


export const Projects =() => {
    const { theme } = useContext(ThemeContext);

    return(
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project,id) => {
                    return <ProjectCard key={id} project={project}/>;
                })}
            </div>
        </section>
    );
};
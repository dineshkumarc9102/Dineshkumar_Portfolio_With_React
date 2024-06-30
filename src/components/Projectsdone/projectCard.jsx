import React, { useContext } from 'react';
import styles from "./projectCard.module.css"
import {getImageUrl} from "../../utils"
import { ThemeContext } from '../../ThemeContext';


export const ProjectCard =({

    project : {title,imageSrc, des, skills, source}
}) => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <img 
            src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3><br></br>
            <p className={styles.description}>{des}</p>
            <ul className={styles.skills}>
                {skills.map((skill,id) => {
                    return(
                    <li key={id} className={styles.skill}>{skill}</li>
                    );

                })}
            </ul>
            <div className={styles.links}>
              <a href={source} className={`${styles.link} ${theme === 'light' ? styles.light : ''}`}>Source</a>
            </div>
        </div>
    );
};
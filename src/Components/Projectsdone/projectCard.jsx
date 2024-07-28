import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from "./projectCard.module.css";
import { ThemeContext } from '../../ThemeContext';
import { useInView } from '../../Hooks/UseInView';

export const ProjectCard = ({ project: { title, imageSrc, des, skills, source } }) => {
    const { theme } = useContext(ThemeContext);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <motion.img 
                src={imageSrc} 
                alt={`Image of ${title}`} 
                className={styles.image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
            />
            <motion.h3 
                className={styles.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.8 }}
            >
                {title}
            </motion.h3>
            <motion.p 
                className={styles.description}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.8 }}
            >
                {des}
            </motion.p>
            <motion.ul 
                className={styles.skills}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8 }}
            >
                {skills.map((skill, id) => (
                    <motion.li 
                        key={id} 
                        className={styles.skill}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
                        transition={{ duration: 0.5, delay: id * 0.1 }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </motion.ul>
            <motion.div 
                className={styles.links}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8 }}
            >
                <a href={source} className={`${styles.link} ${theme === 'light' ? styles.light : ''}`}>Source</a>
            </motion.div>
        </div>
    );
};

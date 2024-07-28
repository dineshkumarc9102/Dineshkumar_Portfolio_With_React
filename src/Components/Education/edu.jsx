import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from "./edu.module.css";
import { skills } from '../../datas/index';
import { historys } from '../../datas/index';
import { ThemeContext } from '../../ThemeContext';
import { useInView } from '../../Hooks/UseInView'; 

export const Education = () => {
    const { theme } = useContext(ThemeContext);
    const [setRef, inView] = useInView({ threshold: 0.1 });

    return (
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`} ref={setRef}>
            <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={inView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.8 }}
            >
                Education
            </motion.h2>
            <div className={styles.content}>
                <div className={`${styles.skills} ${theme === 'light' ? styles.light : ''}`}>
                    {skills.map((skill, id) => (
                        <motion.div 
                            className={styles.skill} 
                            key={id}
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={inView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                            transition={{ duration: 0.8, delay: id * 0.1 }}
                        >
                            <div className={`${styles.skillImageContainer} ${theme === 'light' ? styles.light : ''}`}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </motion.div>
                    ))}
                </div>
                <ul className={styles.history}>
                    {historys.map((history, id) => (
                        <motion.li 
                            className={`${styles.historyItems} ${theme === 'light' ? styles.light : ''}`} 
                            key={id}
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={inView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                            transition={{ duration: 0.8, delay: id * 0.1 }}
                        >
                            <img src={history.imageSrc} alt={`${history.org} Logo`} />
                            <div className={styles.historyItemsDetails}>
                                <h3>{history.role}</h3>
                                <p>{history.org}</p>
                                <ul>
                                    <li>{history.grade}</li>
                                    {/* {historyItems.data.map((education, id) => (
                                        <li key={id}>{education}</li>
                                    ))} */}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

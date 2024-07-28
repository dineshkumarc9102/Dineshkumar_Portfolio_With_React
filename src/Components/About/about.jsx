import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from "./about.module.css";
import aboutImg from '../../assets/about/aboutimg.png';
import { ThemeContext } from '../../ThemeContext';
import { useInView } from '../../Hooks/UseInView'; 

export const About = () => {
    const { theme } = useContext(ThemeContext);
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <section
            ref={ref}
            className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}
        >
            <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                transition={{ duration: 0.8 }}
            >
                About
            </motion.h2>
            <div className={styles.content}>
                <motion.img 
                    src={aboutImg}
                    alt="working img"
                    className={`${styles.aboutimg} ${theme === 'light' ? styles.light : ''}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8, rotateY: inView ? 0 : -90 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.ul 
                    className={styles.aboutItems}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.li 
                        className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}
                        initial={{ opacity: 0, x: -20, rotateX: -45 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20, rotateX: inView ? 0 : -45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.aboutlsText}>
                            <motion.h2 
                                className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                Name - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>Dinesh Kumar</span>
                            </motion.h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}
                        initial={{ opacity: 0, x: -20, rotateY: -45 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20, rotateY: inView ? 0 : -45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.aboutlsText}>
                            <motion.h2 
                                className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                Date of Birth - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>October 09 2002</span>
                            </motion.h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}
                        initial={{ opacity: 0, x: -20, rotateX: 45 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20, rotateX: inView ? 0 : 45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.aboutlsText}>
                            <motion.h2 
                                className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                Address - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>Vellore, Tamil Nadu, India</span>
                            </motion.h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}
                        initial={{ opacity: 0, x: -20, rotateY: 45 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20, rotateY: inView ? 0 : 45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.aboutlsText}>
                            <motion.h2 
                                className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                Zipcode - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>6320004</span>
                            </motion.h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.aboutlsText}>
                            <motion.h1 
                                className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                Profile.....
                            </motion.h1>
                            <br />
                            <motion.p 
                                className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                            >
                                A composed and proactive professional with sharp work ethic, adept at prioritizing tasks and overcoming challenges swiftly. Strong in time management, problem-solving, etc... Thrives in collaboration and under pressure. Meticulous attention to detail ensures precision. Experienced leader driving innovation and achieving collective goals.
                            </motion.p>
                        </div>
                    </motion.li>
                </motion.ul>
            </div>
        </section>
    );
};

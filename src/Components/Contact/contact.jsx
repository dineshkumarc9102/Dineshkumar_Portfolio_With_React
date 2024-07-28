import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from "./contact.module.css";
import email from "../../assets/contact/email.png";
import linkedin from "../../assets/contact/linkedin.png";
import github from "../../assets/contact/github.png";
import { ThemeContext } from '../../ThemeContext';
import { useInView } from '../../Hooks/UseInView';

export const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0 });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer ref={ref} id="contact" className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <div className={styles.text}>
                <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 0.8 }}
                >Contact
                </motion.h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <motion.li 
                   className={styles.link}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <a href="mailto:dineshkumarc9102@gmail.com">
                        <img src={email} alt="Email" />
                    </a>
                </motion.li>
                <motion.li 
                   className={styles.link}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <a href="https://www.linkedin.com/in/dinesh-kumar-8b4bb1250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </motion.li>
                <motion.li 
                   className={styles.link}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <a href="https://github.com/dineshkumarc9102">
                        <img src={github} alt="Github" />
                    </a>
                </motion.li>
            </ul>
            {inView && (
                <motion.button 
                    className={styles['back-to-top']} 
                    onClick={scrollToTop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ↑
                </motion.button>
            )}
        </footer>
    );
};

import React, { useContext } from 'react';
import { motion } from 'framer-motion'; 
import styles from "./hero.module.css";
import { ThemeContext } from '../../ThemeContext';
import dp from "../../assets/hero/dp.png"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <div className={styles.content}>
                <motion.h2
                    className={`${styles.title} ${theme === 'light' ? styles.light : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Hello! I am <br /> Dinesh Kumar
                </motion.h2>
                <motion.p
                    className={styles.des}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    Web Designer &  Frontend Developer
                </motion.p>
                <motion.a
                    href="mailto:dineshkumarc9102@gmail.com"
                    className={styles.contactBtn}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Contact Me
                </motion.a>
            </div>
            <motion.img
                src={dp}
                alt="Dp"
                className={`${styles.dp} ${theme === 'light' ? styles.light : ''}`}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
            />
            <motion.div
                className={styles.topBlur}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.div
                className={styles.bottomBlur}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />
        </section>
    );
};

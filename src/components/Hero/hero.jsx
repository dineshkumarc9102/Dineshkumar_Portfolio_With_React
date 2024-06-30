import React, { useContext } from 'react';
import styles from "./hero.module.css"
import { ThemeContext } from '../../ThemeContext';
import { getImageUrl } from "../../utils";

export const Hero =() => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>            
        <div className={styles.content}>
                <h2 className={`${styles.title} ${theme === 'light' ? styles.light : ''}`}>
                    Hello! I am <br></br> Dinesh Kumar</h2>
                <p className={styles.des}>Web Designer & Developer</p>
                <a href="mailto:dineshkumarc9102@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/dp.png")} alt="Dp" className={`${styles.dp} ${theme === 'light' ? styles.light : ''}`}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}
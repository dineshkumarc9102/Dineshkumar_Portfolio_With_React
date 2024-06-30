import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { getImageUrl } from "../../utils";
import styles from "./contact.module.css"

export const Contact = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <fotter id="contact" className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Fell free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="Email"/>
                    <a href="mailto:dineshkumarc9102@gmail.com">dineshkumarc9102@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn"/>
                    <a href="https://www.linkedin.com/in/dinesh-kumar-8b4bb1250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">www.linkedin.com/in/dinesh-kumarc</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github"/>
                    <a href="https://github.com/dineshkumarc9102">https://github.com/dineshkumarc9102</a>
                </li>
            </ul>
        </fotter>
    )
}
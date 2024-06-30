import React, { useContext } from 'react';
import styles from "./about.module.css"
import { getImageUrl } from "../../utils";
import { ThemeContext } from '../../ThemeContext';


export const About =() =>{
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutimg.png")}
                alt="woring img"
                className={`${styles.aboutimg} ${theme === 'light' ? styles.light : ''}`}
                />
                <ul className={styles.aboutItems}>
                    <li className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}>
                        <div className={styles.aboutlsText}>
                            <h2 className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}>Name - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>Dinesh Kumar</span> </h2>
                        </div>
                    </li>
                    <li className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}>
                        <div className={styles.aboutlsText}>
                            <h2 className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}>Date of Birth - 
                                <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>October 09 2002</span> </h2>
                        </div>
                    </li>
                    <li className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}>
                        <div className={styles.aboutlsText}>
                        <h2 className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}>Address - 
                            <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>Vellore, Tamil Nadu, India</span> </h2>
                        </div>
                    </li>
                    <li className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}>
                        <div className={styles.aboutlsText}>
                        <h2 className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}>Zipcode - 
                            <span className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}> 6320004</span> </h2>
                        </div>
                    </li>
                    <li className={`${styles.aboutls} ${theme === 'light' ? styles.light : ''}`}>{styles.aboutlsText}
                        <div className={styles.aboutlsText}>
                            <h1 className={`${styles.tit} ${theme === 'light' ? styles.light : ''}`}>Profile.....</h1><br/>
                            <p className={`${styles.con} ${theme === 'light' ? styles.light : ''}`}>A composed and proactive professional with sharp work ethic, adept at prioritizing tasks and overcoming challenges swiftly. Strong in time management, problem-solving, etc... Thrives in collaboration and under pressure. Meticulous attention to detail ensures precision. Experienced leader driving innovation and achieving collective goals.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
        )
}
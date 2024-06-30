import React, { useContext } from 'react';

import styles from "./edu.module.css"
import skills from "../../datas/skills.json"
import history from "../../datas/history.json"
import { getImageUrl } from "../../utils"
import { ThemeContext } from '../../ThemeContext';

export const Education =() =>{
    const { theme } = useContext(ThemeContext);
  
    return(
        <section className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <div className={`${styles.skills} ${theme === 'light' ? styles.light : ''}`}>
                    {
                    skills.map((skill,id)=>{
                        return( 
                        <div className={styles.skill} key={id}>
                            <div className={`${styles.skillImageContainer} ${theme === 'light' ? styles.light : ''}`}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItems,id)=>{
                        return (
                            <li className={`${styles.historyItems} ${theme === 'light' ? styles.light : ''}`} key={id}>
                            <img src={getImageUrl(historyItems.imageSrc)}alt={`${historyItems.org}Logo`}/>

                            <div className={styles.historyItemsDetails}>
                                <h3>{`${historyItems.role}`}</h3>
                                <p>{`${historyItems.org}`}</p>
                                <ul>
                                    <li>{`${historyItems.grade}`}</li>
                                    {/* {historyItems.data.map((education,id) =>{
                                        return <li key={id}>{education}</li>
                                    })} */}
                                </ul>
                            </div>
                            </li>
                        );
                    })}
                </ul>
                <div>
                </div>
            </div>

        </section>
    )

}
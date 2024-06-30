import React, {useState, useContext }from "react";
// import { IoMdMenu } from "react-icons/io";
// import { MdClear } from "react-icons/md";
import { ThemeContext } from '../../ThemeContext';
import styles from "./navbar.module.css";
import {getImageUrl} from "../../utils";


export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className={`${styles.navbar} ${theme === 'light' ? styles.light : ''}`}>
        <a className={`${styles.title} ${theme === 'light' ? styles.light : ''}`} href="/">Portfolio</a>
        <div className={styles.menu}>
        <img  className={styles.menuBtn}
        src={
            menuOpen
            ? getImageUrl("nav/clearIcon.png")
            : getImageUrl("nav/menuIcon.png")
        }
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        />
            <ul 
                className={`${styles.menuItems}  ${menuOpen && styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}
            >

                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </div>
        <div className={`${styles.toggleBtn} ${theme === 'dark' ? 'dark' : 'light'}`}
                 onClick={toggleTheme}
                >
        </div>
    </nav>
    );
};


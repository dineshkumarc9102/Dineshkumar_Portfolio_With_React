import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from '../../ThemeContext';
import styles from "./navbar.module.css";
import xbtn from "../../assets/nav/clearIcon.png";
import menubtn from "../../assets/nav/menuIcon.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`${styles.navbar} ${theme === 'light' ? styles.light : ''}`}>
            <a className={`${styles.title} ${theme === 'light' ? styles.light : ''}`} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn}
                    src={menuOpen ? xbtn : menubtn}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen} ${theme === 'light' ? styles.light : ''}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div 
                className={`${styles.toggleBtn} ${theme === 'dark' ? 'dark' : 'light'}`}
                onClick={toggleTheme}
            ></div>
        </nav>
    );
};

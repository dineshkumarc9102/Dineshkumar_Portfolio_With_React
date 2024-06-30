import React, { useContext } from 'react';
import styles from './App.module.css';

import { Contact } from './components/Contact/contact'
import { Projects } from './components/Projectsdone/project'
import { Education } from './components/Education/edu'
import { About } from './components/About/about'
import { Hero } from './components/Hero/hero';
import { Navbar } from './components/navbar/navbar';
import { ThemeProvider, ThemeContext } from './ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${theme === 'light' ? styles.light : ''}`}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

import React, { useEffect, useContext } from 'react';
import './App.css';
import { Contact } from './Components/Contact/contact';
import { Projects } from './Components/Projectsdone/project';
import { Education } from './Components/Education/edu';
import { About } from './Components/About/about';
import { Hero } from './Components/Hero/hero';
import { Navbar } from './Components/navbar/navbar';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${theme}`}>
      <Navbar />
      <Hero />
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;

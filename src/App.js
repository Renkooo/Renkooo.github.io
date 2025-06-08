import './App.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Bakalarka from './projects/Bakalarka';
import ISI from './projects/ISI';
import Connect4 from './projects/Connect4';
import SkryteUmenie from './projects/SkryteUmenie';
import SMAD from './projects/SMAD';
import ZapC from './projects/ZapC';
import Kalkulacka from './projects/Kalkulacka';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={!darkMode ? "App dark" : "App light"}>
      <header className="navbar">
        <nav>
          <a href="/">Home</a>
          <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home" className="section home">
                <h1>Hello, I’m René</h1>
                <p>I’m a full stack developer creating scalable and performant applications.</p>
              </section>

              <section id="about" className="section">
                <h2>About Me</h2>
                <p>I’m a full stack developer. I’m passionate about building digital experiences.</p>
              </section>

              <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                  <Link to="/projects/bakalarka" className="project-card">
                    <h3>bakalarka</h3>
                    <p>Web system for managing aviation documents using React and Firebase.</p>
                  </Link>
                  <Link to="/projects/isi" className="project-card">
                    <h3>isi</h3>
                    <p>Information Systems Interface — Java project for database-backed forms.</p>
                  </Link>
                  <Link to="/projects/connect-4" className="project-card">
                    <h3>connect 4</h3>
                    <p>CLI and GUI version of Connect Four game built in Python.</p>
                  </Link>
                  <Link to="/projects/skryte-umenie" className="project-card">
                    <h3>skryte umenie</h3>
                    <p>Mobile app for exploring hidden art in Košice using React Native.</p>
                  </Link>
                  <Link to="/projects/smad" className="project-card">
                    <h3>SMAD</h3>
                    <p>Simulator and Analyzer of Drones — a physics-based simulation project.</p>
                  </Link>
                  <Link to="/projects/zap-c" className="project-card">
                    <h3>zap-c</h3>
                    <p>First C program solving linear equations from Základy Algoritmizácie.</p>
                  </Link>
                  <Link to="/projects/kalkulacka" className="project-card">
                    <h3>kalkulacka</h3>
                    <p>Simple GUI calculator using Java Swing.</p>
                  </Link>
                </div>
              </section>

              <section id="skills" className="section">
                <h2>Skills</h2>
                <div className="projects-grid">
                  <Link to="/projects/bakalarka" className="project-card">
                    <h3>bakalarka</h3>
                    <p>Web system for managing aviation documents using React and Firebase.</p>
                  </Link>
                </div>
              </section>

              <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Feel free to reach out to me!</p>
                <div className="icons">
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                </div>
              </section>
            </>
          }
        />
        <Route path="/projects/bakalarka" element={<Bakalarka />} />
        <Route path="/projects/isi" element={<ISI />} />
        <Route path="/projects/connect-4" element={<Connect4 />} />
        <Route path="/projects/skryte-umenie" element={<SkryteUmenie />} />
        <Route path="/projects/smad" element={<SMAD />} />
        <Route path="/projects/zap-c" element={<ZapC />} />
        <Route path="/projects/kalkulacka" element={<Kalkulacka />} />
      </Routes>
    </div>
  );
}

export default App;
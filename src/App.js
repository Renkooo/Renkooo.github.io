import './App.css';
import { useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

import Bakalarka from './projects/Bakalarka';
import ISI from './projects/ISI';
import Connect4 from './projects/Connect4';
import SkryteUmenie from './projects/SkryteUmenie';
import SMAD from './projects/SMAD';
import ZapC from './projects/ZapC';
import Kalkulacka from './projects/Kalkulacka';
import { HashLink } from 'react-router-hash-link';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [darkMode, setDarkMode] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <div className={!darkMode ? "App dark" : "App light"}>
      <header className="navbar">
        <nav className="nav-container" ref={navRef}>
          {/* Home button always visible */}
          <Link
            to="/"
            className="home-btn"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Link>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list"></i>
          </div>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>About</HashLink>
            <HashLink smooth to="/#projects" onClick={() => setMenuOpen(false)}>Projects</HashLink>
            <HashLink smooth to="/#skills" onClick={() => setMenuOpen(false)}>Skills</HashLink>
            <HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>Contact</HashLink>
          </div>
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
                    <h3>Raspberry Pi autonomous vehicle</h3>
                    <p>TODO</p>
                  </Link>
                  <Link to="/projects/isi" className="project-card">
                    <h3>Lunar Lockout</h3>
                    <p>TODO</p>
                  </Link>
                  <Link to="/projects/connect-4" className="project-card">
                    <h3>connect 4</h3>
                    <p>TODO</p>
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
                  <a href="https://www.linkedin.com/in/ren%C3%A9-ivan%C4%8D%C3%A1k-b69583294">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
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
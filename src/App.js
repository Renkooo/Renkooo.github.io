import './App.css';
import { useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, Link } from 'react-router-dom';

import Bakalarka from './projects/Bakalarka';
import ISI from './projects/ISI';
import Connect4 from './projects/Connect4';
import SkryteUmenie from './projects/SkryteUmenie';
import SMAD from './projects/SMAD';
import ZapC from './projects/ZapC';
import Kalkulacka from './projects/Kalkulacka';
import Python from './projects/Python';
import { HashLink } from 'react-router-hash-link';


import {
expoLogo,
supabaseLogo,
figmaLogo,
pythonLogo,
reactnativeLogo,
reactLogo,
javascriptLogo,
javaLogo ,
firebaseLogo,
cLogo,
cPlusPlusLogo,
jenkinsLogo,
dockerLogo,
gitLogo
} from './projects/figures/logo.js';


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
              </section>

              <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                  I’m a programmer and DevOps engineer with a passion for turning complex problems into intuitive, user-friendly solutions.
                  Over the past several years, I’ve built web and mobile applications using React, Node.js, Python, and cloud technologies, 
                  always striving for clean code, responsive design, and scalable architectures. 
                  I love learning new tools and frameworks, collaborating with diverse teams, and sharing knowledge through code reviews and tech talks. 
                </p>

                <p> 
                  When I’m not coding, you’ll find me exploring our beautiful cities, experimenting with DIY electronics, or hiking in the mountains.
                </p>
                <div className="about-container">
                  <div className="work-experiences">
                    <h3>Work Experiences</h3>
                    <ul>
                      <li>
                        Webasto Group - DevOps Engineer (2023-current)
                        <ul>
                          <li>As a DevOps Engineer at Webasto, I manage and optimize the build system—including developing modules to enhance 
                              stability and scalability. I administer GitLab and Jenkins, and I design CI/CD pipelines to automate testing, builds, and 
                              production deployments, which speeds up feedback and improves code quality.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="education">
                    <h3>Education</h3>
                    <ul>
                      <li>M.Sc. in Computer Science, Technical University of Košice (2024-current)</li>
                      <li>B.Sc. in Computer Science, Technical University of Košice (2021-2024)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                  <Link to="/projects/bakalarka" className="project-card">
                    <h3>Autonomous vehicle</h3>
                    <p>Prototype of an autonomous vehicle based on the Raspberry Pi platform.</p>
                  </Link>
                  <Link to="/projects/isi" className="project-card">
                    <h3>Lunar Lockout</h3>
                    <p>Sliding-block puzzle solver using search algorithms.</p>
                  </Link>
                  <Link to="/projects/connect-4" className="project-card">
                    <h3>Connect 4 Web</h3>
                    <p>Web-based implementation of the Connect 4 game with AI opponent.</p>
                  </Link>
                  <Link to="/projects/skryte-umenie" className="project-card">
                    <h3>Skryté Umenie</h3>
                    <p>Mobile app for exploring hidden art in Košice using interactive maps.</p>
                  </Link>
                  <Link to="/projects/smad" className="project-card">
                    <h3>Deep-RL for Lunar Lander</h3>
                    <p>Deep reinforcement learning approach for solving the Lunar Lander game.</p>
                  </Link>
                  <Link to="/projects/zap-c" className="project-card">
                    <h3>Invincible Game</h3>
                    <p>My first 2D game with procedurally generated levels.</p>
                  </Link>
                  <Link to="/projects/kalkulacka" className="project-card">
                    <h3>Scientific Calculator</h3>
                    <p>A feature-rich calculator with advanced reasoning and handmade body.</p>
                  </Link>
                  <Link to="/projects/Python" className="project-card">
                    <h3>System Resource Tray Monitors</h3>
                    <p>Applications for monitoring system resources in the tray.</p>
                  </Link>
                </div>
              </section>

              <section id="skills" className="section my-skills">
                <h2>Skills</h2>
                <div className="tech-icons">
                  <div className="icon">
                    <img src={pythonLogo} alt="Python" style={{width: '2em', height: '2em'}} />
                    <span>Python</span>
                  </div>
                  <div className="icon">
                    <img src={javaLogo} alt="Java" style={{width: '2em', height: '2em'}} />
                    <span>Java</span>
                  </div>
                  <div className="icon">
                    <img src={cLogo} alt="C" style={{width: '2em', height: '2em'}} />
                    <span>C</span>
                  </div>
                  <div className="icon">
                    <img src={cPlusPlusLogo} alt="C++" style={{width: '2em', height: '2em'}} />
                    <span>C++</span>
                  </div>
                  <div className="icon">
                    <img src={jenkinsLogo} alt="Jenkins" style={{width: '2em', height: '2em'}} />
                    <span>Jenkins</span>
                  </div>
                  <div className="icon">
                    <img src={dockerLogo} alt="Docker" style={{width: '2em', height: '2em'}} />
                    <span>Docker</span>
                  </div>
                  <div className="icon">
                    <img src={gitLogo} alt="Git" style={{width: '2em', height: '2em'}} />
                    <span>Git</span>
                  </div>
                  <div className="icon">
                    <img src={reactnativeLogo} alt="React Native" style={{width: '2em', height: '2em'}} />
                    <span>React Native</span>
                  </div>
                  <div className="icon">
                    <img src={reactLogo} alt="React" style={{width: '2em', height: '2em'}} />
                    <span>React</span>
                  </div>
                  <div className="icon">
                    <img src={javascriptLogo} alt="JavaScript" style={{width: '2em', height: '2em'}} />
                    <span>JavaScript</span>
                  </div>
                  <div className="icon">
                    <img src={expoLogo} alt="Expo Go" style={{width: '2em', height: '2em'}} />
                    <span>Expo Go</span>
                  </div>
                  <div className="icon">
                    <img src={supabaseLogo} alt="Supabase" style={{width: '2em', height: '2em'}} />
                    <span>Supabase</span>
                  </div>
                  <div className="icon">
                    <img src={figmaLogo} alt="Figma" style={{width: '2em', height: '2em'}} />
                    <span>Figma</span>
                  </div>
                  <div className="icon">
                    <img src={firebaseLogo} alt="Firebase" style={{width: '2em', height: '2em'}} />
                    <span>Firebase</span>
                  </div>
                </div>
              </section>

              <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Feel free to reach out to me!</p>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/ren%C3%A9-ivan%C4%8D%C3%A1k-b69583294"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/Renkooo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
        <Route path="/projects/Python" element={<Python />} />
      </Routes>
    </div>
  );
}

export default App;
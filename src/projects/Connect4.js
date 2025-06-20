import { useEffect } from 'react';
import './Project.css';
import connectImage from './figures/connect4.jpg';

import { DiJava, DiReact } from 'react-icons/di';
import { SiSpringboot, SiThymeleaf, SiFirebase } from 'react-icons/si';

// Generic icons
import { AiOutlineDatabase, AiOutlineApi } from 'react-icons/ai';


function Connect4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Connect 4 Web App</h1>
        {/* <h2>Java • Spring Boot 3 • Thymeleaf • H2 • JPA • JDBC • REST • React • Firebase Auth (Email & Google)</h2> */}
      </header>

      {/* Overview & Key Objective */}
      <section className="project-section project-objective">
        <h3>Overview &amp; Objective</h3>
        <p>
          Connect Four web app supporting classic gameplay and social features:
        </p>
        <ul>
          <li>Responsive game board rendered with Thymeleaf and CSS for desktop & mobile play</li>
          <li>Modes: Player vs Player (local), Player vs AI (heuristic-based)</li>
          <li>Flexible participation: play as a guest (anonymous) or log in for full social features</li>
          <li>Persistent data storage in H2 (dev) / PostgreSQL (prod) for high-scores, comments, and ratings</li>
          <li>Secure authentication via Firebase Auth (email/password and Google Sign-In)</li>
          <li>Community features: leave comments, star ratings, and view a global leaderboard</li>
          <li>Configurable data layers: Spring JDBC, Spring Data JPA, or remote REST via profiles</li>
        </ul>
        <img src={connectImage} alt="Connect 4 gameplay screenshot"/>
      </section>

      {/* Technologies & Tools */}
      <section className="project-section">
        <h3>Technologies &amp; Tools</h3>
        <ul>
          <li><strong>Backend:</strong> Java 17, Spring Boot, Spring MVC, Spring Data JPA, Spring JDBC</li>
          <li><strong>Database:</strong> H2 embedded DB (development) / PostgreSQL (production-ready) storing scores, comments &amp; ratings</li>
          <li><strong>Templating &amp; APIs:</strong> Thymeleaf fragments for UI, Spring REST controllers for SPA data</li>
          <li><strong>Frontend:</strong> React, React Router, Axios, Bootstrap</li>
          <li><strong>Authentication:</strong> Firebase Auth with email/password and Google OAuth flows</li>
          <li><strong>Testing:</strong> JUnit unit tests, MockMvc integration tests, React Testing Library (planned)</li>
          <li><strong>Build &amp; Deployment:</strong> Maven, npm, Dockerfile</li>
        </ul>
      </section>

      {/* System Architecture */}
      <section className="project-section">
        <h3>System Architecture</h3>
        <p>
          Modular MVC design with pluggable persistence:
        </p>
        <ul>
          <li><strong>Model:</strong> Entities for Game, Board, Tile, Comment, Rating, Score</li>
          <li><strong>Data Access:</strong> DAO interfaces with JDBC, JPA, and REST implementations toggleable via Spring profiles</li>
          <li><strong>Service Layer:</strong> Core game logic (drop-disc, win detection, AI), social services (comments, ratings, scores)</li>
          <li><strong>Controllers:</strong> Spring MVC for HTML views; REST controllers for JSON data</li>
          <li><strong>View Layer:</strong> Thymeleaf for SSR; future React components for SPA interactivity</li>
        </ul>
      </section>

      {/* Key Features */}
      <section className="project-section">
        <h3>Key Features</h3>
        <ul>
          <li>Optimized 7x6 grid logic: dropDisc() & checkWin() scanning in four directions</li>
          <li>Heuristic AI opponent evaluating potential threats and wins</li>
          <li>Anonymous guest play or authenticated sessions unlocking comments & ratings</li>
          <li>Global leaderboard updating after each game, backed by database</li>
          <li>Dynamic switching of persistence (JDBC, JPA, REST) via Spring profiles</li>
          <li>Reusable Thymeleaf fragments for game board, social sections, and leaderboard</li>
        </ul>
      </section>

      <section className="project-section used-technologies">
        <h3>Used Technologies</h3>
        <div className="tech-icons">
          <div className="icon">
            <DiJava size="2em" />
            <span>Java 17</span>
          </div>
          <div className="icon">
            <SiSpringboot size="2em" />
            <span>Spring Boot 3</span>
          </div>
          <div className="icon">
            <SiThymeleaf size="2em" />
            <span>Thymeleaf</span>
          </div>
          <div className="icon">
            <AiOutlineDatabase size="2em" />
            <span>H2 Database</span>
          </div>
          <div className="icon">
            <AiOutlineDatabase size="2em" />
            <span>Spring Data JPA</span>
          </div>
          <div className="icon">
            <AiOutlineDatabase size="2em" />
            <span>Spring JDBC</span>
          </div>
          <div className="icon">
            <AiOutlineApi size="2em" />
            <span>REST APIs</span>
          </div>
          <div className="icon">
            <DiReact size="2em" />
            <span>React</span>
          </div>
          <div className="icon">
            <SiFirebase size="2em" />
            <span>Firebase Auth</span>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h3>Links</h3>
        <div className="icons">
          <a href="https://youtu.be/RngqCiek7b0">
            <i className="bi bi-youtube"></i>
          </a>
          {/* <a href="#"> */}
          <a>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

    </div>
  );
}

export default Connect4;

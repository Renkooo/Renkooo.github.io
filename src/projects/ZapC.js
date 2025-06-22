import { useState, useEffect } from 'react';
import './Project.css';
import ncursesLogo from './figures/ncurses.png';

import {
  cLogo
} from './figures/logo.js';

import connectImage from './figures/invincible/Obrazok2.png';

const galleryImages = [
  require('./figures/invincible/Obrazok1.png'),
  require('./figures/invincible/Obrazok2.png'), 
  require('./figures/invincible/Obrazok3.png'),
  require('./figures/invincible/Obrazok4.png'),
  require('./figures/invincible/Obrazok5.png'),
  require('./figures/invincible/Obrazok6.png'),
];

function ZapC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = idx => {
    setCurrentIndex(idx);
    setShowGallery(true);
  };

  const closeGallery = () => setShowGallery(false);

  const prevImage = e => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = e => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Invincible Game</h1>
      </header>

      {/* Topic & Objective */}
      <section className="project-section project-objective">
        <h3>Topic &amp; Objective</h3>
        <p>
          This project is a terminal-based 2D obstacle game, implemented in C
          with the ncurses library. The player controls a little character who
          must dodge holes, shoot bombs and duck under planes, all at increasing
          speeds and difficulty levels. Designed to run in a standard UNIX
          terminal, it features real-time keyboard input (no Enter key required),
          colored output, multiple levels of play and a scoring system based on
          successful maneuvers.
        </p>
        <p>
          This project was my first substantial solo endeavor in systems
          programming, and I’m proud of how it brings together real-time input,
          timer-driven world updates, and dynamic rendering—all within a
          simple C program.
        </p>
        <img src={connectImage} alt="Connect 4 gameplay screenshot"/>
      </section>

      {/* Technologies Used */}
      <section className="project-section used-technologies">
        <h3>Technologies Used</h3>
        <ul>
          <li><strong>Language:</strong> C (ANSI C99)</li>
          <li><strong>Rendering:</strong> ncurses for colored, cursor-controlled output</li>
          <li><strong>Timing:</strong> POSIX <code>nanosleep()</code> for frame pacing</li>
          <li><strong>Input:</strong> non-blocking <code>getch()</code> and arrow-key handling</li>
          <li><strong>Build:</strong> gcc with <code>-lncurses</code></li>
        </ul>
        <div className="tech-icons">
          <div className="icon">
            <img src={cLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>C</span>
          </div>
          <div className="icon">
            <img src={ncursesLogo} alt="Google Maps" style={{width: '7em', height: '2em'}} />
            <span>ncurses</span>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="project-section">
        <h3>System Architecture</h3>
        <p>
          The game runs entirely within <code>main()</code>. Initialization sets up
          the ncurses environment, color pairs and non-blocking input. A simple
          game loop then:
        </p>
        <ul>
          <li>Draws the ground and borders</li>
          <li>Handles user input for jump, shoot and duck</li>
          <li>Randomly spawns one obstacle at a time (hole, bomb or plane)</li>
          <li>Moves obstacle across the screen in sync with the frame timer</li>
          <li>Detects collision or successful dodge to update score or end game</li>
        </ul>
      </section>

      {/* Implementation Highlights */}
      <section className="project-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>
            <strong>Jump logic:</strong> a 10-step arc where the character moves
            up for 5 frames and down for 5 frames, tied to obstacle movement.
          </li>
          <li>
            <strong>Shooting:</strong> launches a bullet leftward, destroys the bomb
            on collision and awards bonus points.
          </li>
          <li>
            <strong>Ducking:</strong> swaps the character sprite for the duration
            of the plane’s flight overhead.
          </li>
          <li>
            <strong>Levels:</strong> three difficulty settings—easy, medium, hard—
            selected via command-line argument, each adjusting the frame delay.
          </li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Sketched the game flow and controls on paper, defining each obstacle’s behavior.</li>
          <li>Set up ncurses and basic screen rendering—ground, borders and character.</li>
          <li>Implemented non-blocking input to capture arrow keys and quit command.</li>
          <li>Coded the random obstacle generator and synchronized movement with <code>nanosleep()</code>.</li>
          <li>Added scoring logic and on-screen score display.</li>
          <li>Polished the user interface: intro screen, instructions on 'h', and clean exit on 'q'.</li>
        </ol>
      </section>

      {/* Results & Learnings */}
      <section className="project-section">
        <h3>Results &amp; Learnings</h3>
        <p>
          This project cemented my understanding of real-time terminal I/O,
          frame-based animation in a text UI and the power of ncurses for rapid
          game prototyping. I learned how to manage non-blocking input, color
          pairs and precise timing in a single C file. I’m proud of achieving a
          polished, playable experience in under 1,000 lines of code and of
          conquering my first major C programming challenge.
        </p>
      </section>
            <section className="project-section">
        <h3>Gallery</h3>
        <div className="gallery-thumbnails">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Skryté Umenie screenshot ${idx + 1}`}
              className="gallery-thumb"
              onClick={() => openGallery(idx)}
            />
          ))}
        </div>
      </section>

      {/* Modal Gallery */}
      {showGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <button className="gallery-close" onClick={closeGallery}>&times;</button>
          <button className="gallery-prev" onClick={prevImage}>&lt;</button>
          <img
            src={galleryImages[currentIndex]}
            alt={`Full size ${currentIndex + 1}`}
            className="gallery-full"
            onClick={e => e.stopPropagation()}
          />
          <button className="gallery-next" onClick={nextImage}>&gt;</button>
        </div>
      )}

    </div>
  );
}

export default ZapC;

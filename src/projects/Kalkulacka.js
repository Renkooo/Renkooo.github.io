import { useState, useEffect } from 'react';
import './Project.css';

import calcImage from './figures/kalkulacka/calc-2.jpg';

import {
  cLogo,
  cPlusPlusLogo,
  arduinoLogo
} from './figures/logo.js';

const galleryImages = [
  require('./figures/kalkulacka/calc-1.jpg'),
  require('./figures/kalkulacka/calc-2.jpg'), 
  require('./figures/kalkulacka/calc-3.jpg'),
  require('./figures/kalkulacka/scheme.png'),
];


function Kalkulacka() {
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
        <h1>Scientific Calculator</h1>
      </header>

      {/* Topic & Objective */}
      <section className="project-section project-objective">
        <h3>Topic &amp; Objective</h3>
        <div className="text">
          <p>
            This project delivers a fully functional, bracket-aware scientific calculator
            running on an Arduino Uno.  It interprets and evaluates complex expressions
           —including nested parentheses—directly on the device, provides a scrollable
            history of past calculations, and even features a hidden “bomb-defuse” mini-game
            for fun.
          </p>
          <p>
            Beyond electronics and firmware, every aspect of its enclosure—from the milled
            wooden case to the hand-stitched packaging—was crafted manually.  This
            fusion of precision software and artisanal woodworking embodies both
            technical rigor and personal craftsmanship.
          </p>
        </div>
        <img
          src={calcImage}
          alt="Hand-crafted scientific calculator"
          style={{ width: '20%'}}
        />

        {/* System Architecture */}
        <section className="project-section">
          <h3>System Architecture</h3>
          <ul>
            <li>
              <strong>UI Layer:</strong> Keypad scans &amp; LCD updates driven by <code>ui.h/.cpp</code>
            </li>
            <li>
              <strong>Expression Parser:</strong> <code>Calculate.cpp</code> implements
              <code>parseSum()</code>, <code>parseFactor()</code>, <code>parsePart()</code>
            </li>
            <li>
              <strong>Syntax Checker:</strong> <code>SyntaxErrorHandler.cpp</code> ensures
              grammatically valid inputs before evaluation
            </li>
            <li>
              <strong>Core Logic:</strong> History buffer, result display &amp; bomb-game logic
              in <code>main.ino</code>
            </li>
            <li>
              <strong>Hardware:</strong> LEDs and buzzer provide feedback, hand-wired
              in a custom wooden enclosure
            </li>
          </ul>
        </section>
      </section>

      {/* Technologies Used */}
      <section className="project-section used-technologies">
        <h3>Used Technologies</h3>
        <div className="tech-icons">
          <div className="icon">
            <img src={cLogo} alt="C Language" style={{width: '3em', height: '3em'}} />
            <span>C Language</span>
          </div>
          <div className="icon">
            <img src={cPlusPlusLogo} alt="Google Maps" style={{width: '3em', height: '3em'}} />
            <span>C++ Language</span>
          </div>
          <div className="icon">
            <img src={arduinoLogo} alt="Expo Go" style={{width: '3em', height: '3em'}} />
            <span>Arduino</span>
          </div>
        </div>
        <ul>
          <li><strong>Microcontroller:</strong> Arduino Uno R3</li>
          <li><strong>Language:</strong> C / C++</li>
          <li><strong>Input:</strong> 4×4 Keypad library</li>
          <li><strong>Display:</strong> I²C 16×2 LCD library</li>
          <li><strong>Parser:</strong> Custom recursive-descent evaluator (bracket support)</li>
          <li><strong>Error Handling:</strong> SyntaxErrorHandler module</li>
          <li><strong>Extras:</strong> Bomb-defuse mini-game triggered via special key combo</li>
          <li><strong>Enclosure:</strong> Hand-milled wood case &amp; bespoke packaging</li>
        </ul>
      </section>

      {/* Implementation Highlights */}
      <section className="project-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>
            Recursive-descent parser handles arbitrary nesting of parentheses with correct
            operator precedence.
          </li>
          <li>
            SyntaxErrorHandler blinks LEDs &amp; shows “Syntax Error!” on LCD on invalid input.
          </li>
          <li>
            History mode lets users scroll through past expressions &amp; results via special key.
          </li>
          <li>
            Bomb-defuse mini-game adds playful interaction, triggered by holding “MODE” + “3”.
          </li>
          <li>
            Entire enclosure milled and assembled by hand from solid wood; packaging
            crafted with the same attention to detail.
          </li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Designed and prototyped the recursive parser and syntax checker modules.</li>
          <li>Integrated keypad scanning and LCD routines in <code>ui.cpp</code>.</li>
          <li>Built the history buffer and bomb-game logic in the Arduino sketch.</li>
          <li>Tested extensively on the Arduino, validated edge cases (unmatched brackets, etc.).</li>
          <li>Hand-milled the wooden enclosure panels, assembled and finished all surfaces.</li>
          <li>Hand-crafted custom packaging to match the artisanal nature of the device.</li>
        </ol>
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

export default Kalkulacka;
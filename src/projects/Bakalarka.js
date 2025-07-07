import './Project.css';
import carImage from './figures/auticko_a_kamera.jpg';
import { useEffect } from 'react';

import {
  pythonLogo,
  raspberryPiLogo,
  opencvLogo,
  pytorchLogo,
  YOLOLogo
} from './figures/logo.js';

function Bakalarka() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Autonomous Vehicle on Raspberry Pi</h1>
      </header>

      {/* Topic & Objective */}
      <section className="project-section project-objective">
        <h3>Topic and Objective</h3>
        <p>
          The project focuses on developing a prototype of an autonomous vehicle
          based on the Raspberry Pi platform.
        </p>
        <p>The goal was to build a functional model capable of:</p>
        <ul>
          <li>capturing images using a camera,</li>
          <li>processing visual data in real time,</li>
          <li>detecting road signs and the roadway,</li>
          <li>
            navigating in a simulated road environment using YOLOv5 and Python
            logic implementation.
          </li>
        </ul>
        <p>
          This project was my bachelor’s thesis and received a final grade of <strong>A</strong>.
        </p>
        <img src={carImage} alt="Autonomous vehicle prototype"/>

        {/* System Architecture */}
        <section className="project-section">
          <h3>System Architecture</h3>
          <ul>
            <li>
              Raspberry Pi processes camera input and performs object detection
              using YOLOv5.
            </li>
            <li>
              Detection output is fed to a control algorithm that determines
              vehicle direction & speed based on sign type & position.
            </li>
            <li>Motors are driven via GPIO pins through the HAT module.</li>
          </ul>
          <p><strong>Hardware:</strong></p>
          <ul>
            <li>Raspberry Pi 4B (8 GB RAM)</li>
            <li>OV5647 camera (CSI interface)</li>
            <li>Niceboy webcam</li>
            <li>4x DC motors (gear ratio 1:48)</li>
            <li>HAT module for power & motor control</li>
          </ul>
        </section>
      </section>

      <section className="project-section used-technologies">
        <h3>Used Technologies</h3>
        <div className="tech-icons">
          <div className="icon">
            <img src={raspberryPiLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>Raspberry Pi</span>
          </div>
          <div className="icon">
            <img src={opencvLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>OpenCV</span>
          </div>
          <div className="icon">
            <img src={pythonLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>Python</span>
          </div>
          <div className="icon">
            <img src={pytorchLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>PyTorch</span>
          </div>
          <div className="icon">
            <img src={YOLOLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>YOLO</span>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Prepared a test track with traffic signs</li>
          <li>Collected 252 images + data augmentation → ~600 images</li>
          <li>Manually annotated each image</li>
          <li>Trained YOLOv5l, YOLOv5s, YOLOv5n models</li>
          <li>Implemented the navigation algorithm</li>
          <li>Tested the prototype in a simulated traffic environment</li>
        </ol>
      </section>

      {/* Results */}
      <section className="project-section">
        <h3>Results</h3>
        <ul>
          <li><strong>YOLOv5n</strong> - fastest, but least accurate</li>
          <li><strong>YOLOv5l</strong> - most accurate, but computationally demanding</li>
          <li>
            <strong>YOLOv5s</strong> - best balance of performance & accuracy
            for Raspberry Pi
          </li>
          <li>The vehicle was able to:</li>
          <ul>
            <li>recognize basic road signs (e.g., STOP, priority road)</li>
            <li>react appropriately to environmental changes</li>
            <li>complete the test track reliably</li>
          </ul>
        </ul>
        <p className="project-note">
          <strong>Limitation:</strong> computational demands and processing delays
          with complex models—an inherent Raspberry Pi constraint.
        </p>
      </section>
    </div>
  );
}

export default Bakalarka;

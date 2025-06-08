import carImage from './figures/auticko_a_kamera.jpg';


function Bakalarka() {
  return (
    <div className="section">
      <h2>Autonomous Vehicle on Raspberry Pi</h2>

      <h3>Topic and Objective</h3>
    <div style={{ position: 'relative' }}>
      <p>
        The thesis focuses on developing a prototype of an autonomous vehicle based on the Raspberry Pi platform.
      </p>
      <p>  
        The goal was to build a functional model capable of:
      </p>
      <ul>
        <li>capturing images using a camera,</li>
        <li>processing visual data in real time,</li>
        <li>detecting road signs,</li>
        <li>navigating in a simulated road environment using YOLOv5.</li>
      </ul>

      <img
        src={carImage}
        alt="Autonomous vehicle prototype"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '24rem',
          borderRadius: '10px',
        }}
      />
    </div>

      <h3>Technologies Used</h3>
      <p><strong>Hardware:</strong></p>
      <ul>
        <li>Raspberry Pi 4B (8 GB RAM)</li>
        <li>OV5647 camera (CSI interface)</li>
        <li>Niceboy webcam</li>
        <li>4× DC motors (gear ratio 1:48)</li>
        <li>HAT module for power and motor control</li>
      </ul>
      <p><strong>Software and libraries:</strong></p>
      <ul>
        <li>Raspberry Pi OS (Raspbian) / Debian</li>
        <li>Python</li>
        <li>OpenCV</li>
        <li>PyTorch</li>
        <li>YOLOv5</li>
      </ul>

      <h3>System Architecture</h3>
      <ul>
        <li>The Raspberry Pi processes input from the camera and performs object detection using YOLOv5.</li>
        <li>The detection output is evaluated by a simple control algorithm that decides the vehicle’s direction based on the type and position of detected signs.</li>
        <li>Motors are controlled via GPIO pins through the HAT module.</li>
      </ul>

      <h3>Development Process</h3>
      <ol>
        <li>Prepared a test track with traffic signs</li>
        <li>Collected 252 images + data augmentation → ~600 images</li>
        <li>Manually annotated each image</li>
        <li>Trained YOLOv5l, YOLOv5s, YOLOv5n models</li>
        <li>Implemented the navigation algorithm</li>
        <li>Tested the prototype in a simulated traffic environment</li>
      </ol>

      <h3>Results</h3>
      <ul>
        <li><strong>YOLOv5n</strong> - fastest, but least accurate</li>
        <li><strong>YOLOv5l</strong> - most accurate, but computationally demanding</li>
        <li><strong>YOLOv5s</strong> - best balance between performance and accuracy for Raspberry Pi</li>
        <li>The vehicle was able to:</li>
        <ul>
          <li>recognize basic road signs (e.g., STOP, priority road)</li>
          <li>react appropriately to changes in the environment</li>
          <li>successfully drive through the test track with acceptable reliability</li>
        </ul>
      </ul>
      <p><strong>Limitation:</strong> Computational demands and processing delays with more complex models, which is an inherent constraint of the Raspberry Pi.</p>
    </div>
  );
}

export default Bakalarka;

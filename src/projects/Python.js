import React, { useEffect } from 'react';
import './Project.css';

function Python() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>System Resource Tray Monitors</h1>
      </header>

      {/* Topic & Objective */}
      <section className="project-section">
        <h3>Topic &amp; Objective</h3>
        <p>
          This collection of lightweight Python scripts provides real-time monitoring of key
          system resources—CPU load, disk free space (C:\), and RAM usage—via dynamic
          system-tray icons. Each mini-app runs in the background, periodically polls its
          target metric, renders the current value onto a tiny image using Pillow, and
          updates an always-visible tray icon. The goal is to offer at-a-glance status feedback
          without any bulky UI or distraction, making it perfect for power users and
          developers who need continuous system insights.
        </p>
      </section>

      {/* Technologies Used */}
      <section className="project-section">
        <h3>Technologies Used</h3>
        <ul>
          <li><strong>Python</strong> - core language</li>
          <li><strong>psutil</strong> - cross-platform process &amp; system utilities</li>
          <li><strong>pystray</strong> - system tray icon &amp; menu integration</li>
          <li><strong>Pillow</strong> - on-the-fly image creation for icons</li>
          <li><strong>threading</strong> - background loops for continuous updates</li>
        </ul>
      </section>

      {/* System Architecture */}
      <section className="project-section">
        <h3>System Architecture</h3>
        <p>
          Each monitor script follows the same lightweight architecture:
        </p>
        <ul>
          <li>
            <strong>Metric poller:</strong> a function (<code>get_cpu_percent()</code>,
            <code>get_c_drive_free()</code>, <code>get_ram_percent()</code>) that queries
            psutil for the current value.
          </li>
          <li>
            <strong>Icon renderer:</strong> dynamically draws the numeric value onto a
            64x64 image using Pillow’s <code>ImageDraw</code> and a TrueType font.
          </li>
          <li>
            <strong>Tray loop:</strong> a background thread that updates the tray icon
            every few seconds.
          </li>
          <li>
            <strong>Menu integration:</strong> a “Quit” menu item via pystray to cleanly
            stop the icon.
          </li>
        </ul>
      </section>

      {/* Implementation Highlights */}
      <section className="project-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>
            <code>psutil.cpu_percent()</code>, <code>psutil.disk_usage('C:\\')</code>, and
            <code>psutil.virtual_memory().percent</code> used for accurate, low-overhead polling.
          </li>
          <li>
            Font-sizing logic ensures the number always fits neatly inside the icon.
          </li>
          <li>
            Daemon threads keep the main loop responsive while performing periodic updates.
          </li>
          <li>
            Consistent pattern across three scripts—CPUusage, Cspace, and RAMusage—so
            deployment is as simple as copying and running each .py file.
          </li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Evaluated psutil on Windows and Linux for resource readings.</li>
          <li>Prototyped icon drawing with Pillow and fine-tuned text centering.</li>
          <li>Integrated pystray to display and update tray icons with custom menus.</li>
          <li>Refactored into three separate scripts for modular deployment.</li>
          <li>Tested under varying system loads and on battery power.</li>
          <li>Packaged with single-file runners and documented usage in README.</li>
        </ol>
      </section>

      {/* Results & Learnings */}
      <section className="project-section">
        <h3>Results &amp; Learnings</h3>
        <p>
          The tray monitors proved extremely lightweight (less than 5 MB RAM each) and reliable,
          offering instant visual feedback on system health. Custom icon generation meant
          no external assets were required, and the uniform design across scripts simplified
          user adoption. This approach highlighted how combining psutil and Pillow can
          deliver real-time graphical utilities without a full GUI framework.
        </p>
      </section>

      {/* Sources */}
      <section className="project-section">
        <h3>Sources</h3>
        <ul>
          <li>
            View
            <a
              href="https://github.com/Renkooo/Python-PC-Monitoring/blob/main/CPUusage.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>CPUusage.py</code>
            </a>
          </li>
          <li>
            View
            <a
              href="https://github.com/Renkooo/Python-PC-Monitoring/blob/main/Cspace.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Cspace.py</code>
            </a>
          </li>
          <li>
            View
            <a
              href="https://github.com/Renkooo/Python-PC-Monitoring/blob/main/RAMusage.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>RAMusage.py</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Python;

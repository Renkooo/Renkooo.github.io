import './Project.css';
import { useEffect } from 'react';

import {
  pythonLogo,
  pytorchLogo,
  numpyLogo,
  matplotlibLogo,
  gymLogo
} from './figures/logo.js';

function SMAD() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Deep-RL for LunarLander</h1>
      </header>

      <section className="project-section">
        <h3>Topic &amp; Objective</h3>
        <p>
          This project compares three deep reinforcement-learning approaches—DQN, Double DQN,
          and PPO—on the Gym <code>LunarLander-v2</code> benchmark to understand how
          network depth, target-network decoupling, and on-policy actor-critic methods affect
          training stability, convergence speed, and landing performance. A custom reward-shaping
          function was designed to provide dense feedback on attitude, velocity, position, and
          soft-landing bonuses.
        </p>
      </section>

      <section className="project-section used-technologies">
        <h3>Used Technologies</h3>
        <div className="tech-icons">
          <div className="icon">
            <img src={pythonLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>Python</span>
          </div>
          <div className="icon">
            <img src={gymLogo} alt="Google Maps" style={{width: '8em', height: '2em'}} />
            <span>GYM</span>
          </div>
          <div className="icon">
            <img src={pytorchLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>PyTorch</span>
          </div>
          <div className="icon">
            <img src={numpyLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>NumPy</span>
          </div>
          <div className="icon">
            <img src={matplotlibLogo} alt="Google Maps" style={{width: '2em', height: '2em'}} />
            <span>MatPlotLib</span>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h3>System Architecture</h3>
        <ul>
          <li>
            <strong>Agent Classes:</strong> <code>SingleDQNAgent</code>, <code>DoubleDQNAgent</code>,
            and <code>PPOAgent</code>, each encapsulating policy and target networks.
          </li>
          <li>
            <strong>Network Variants:</strong> Multi-layer MLPs of varying depths for DQN; actor-critic
            blocks for PPO.
          </li>
          <li>
            <strong>Training Loop:</strong> 2 000 episodes x 3 seeds for DQN variants and
            4 000 episodes for PPO, with ε-greedy schedules.
          </li>
          <li>
            <strong>Reward Shaping:</strong> Dense penalties and bonuses guide the agent toward stable,
            soft landings.
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>
            <code>DQN:</code> Experience replay and a frozen target network stabilize Q-learning.
          </li>
          <li>
            <code>Double DQN:</code> Decoupled action selection and evaluation reduce overestimation bias.
          </li>
          <li>
            <code>PPO:</code> Clipped surrogate loss and generalized advantage estimation enable robust
            on-policy updates.
          </li>
          <li>
            <code>Common:</code> All algorithms share the same reward shaping
            and Monte Carlo averaging over three random seeds for fair comparison.
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h3>Development Process</h3>
        <ol>
          <li>Designed and implemented each agent class with clear separation of policy and target networks.</li>
          <li>Created a reward-shaping function to give the agent continuous guidance.</li>
          <li>Built a training harness in <code>main.py</code> to launch multiple runs, checkpoint models, and log metrics.</li>
          <li>Automated plotting of learning curves and recorded wall-clock training times.</li>
          <li>Conducted Monte Carlo experiments to compute average performance and variance.</li>
        </ol>
      </section>

      <section className="project-section">
        <h3>Results &amp; Learnings</h3>
        <p>
          This project showed that a three-layer DQN converges fastest but can suffer from value
          overestimation; Double DQN achieves more stable landings with lower variance; and PPO
          attains the highest mean reward overall at the cost of longer training time. Reward shaping
          proved essential—without it, none of the agents reliably learned to land. These insights
          provide actionable guidelines on algorithm selection, network depth, and reward design
          for continuous control tasks.
        </p>
      </section>

      <section className="project-section">
        <h3>Future Enhancements</h3>
        <ul>
          <li>Extend comparisons to continuous control environments such as <code>BipedalWalker</code>.</li>
          <li>Include additional algorithms like SAC and TD3 for comprehensive benchmarking.</li>
          <li>Integrate automated hyperparameter optimization using libraries such as Optuna.</li>
          <li>Enable TensorBoard logging for real-time visualization of training metrics.</li>
        </ul>
      </section>
    </div>
  );
}

export default SMAD;

import LunarLockout from './figures/lunar_lockout.jpg';
import './Project.css';
import { useEffect } from 'react';

function ISI() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const results = [
    [1, '14/4',  '7/4',   '9/4',   '10/4'],
    [2, '32/6',  '25/6',  '27/6',  '31/6'],
    [3, '299/6', '34/9',  '218/7', '293/7'],
    [4, '246/6', '8/6',   '108/6', '215/6'],
    [5, '2072/10','28/10', '929/15','1308/10'],
    [6, '2614/10','1845/18','588/15','2038/10'],
    [7, '1860/8','1152/12','1293/8','970/8'],
    [8, '377/8', '251/8',  '193/8', '386/8'],
    [9, '387/10','167/13', '211/10','377/11'],
    [10,'209/5', '144/9',  '183/5', '261/5'],
  ];

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>Lunar Lockout Puzzle: BFS, DFS, Greedy &amp; A* Comparison</h1>
      </header>

      <section className="project-section project-objective">
        <div className="project-objective-content">
          <h3>Purpose of the Project</h3>
          <p>
            This project implements and compares four classic search algorithms—Breadth-First Search,
            Depth-First Search, Greedy Search, and A*—within a single sliding-block puzzle called
            “Lunar Lockout.” By visualizing each algorithm’s behavior and measuring their performance
            (states visited and solution depth), I learn their strengths, weaknesses, and suitability
            for real-time decision making.
          </p>
        </div>
        <img src={LunarLockout} alt="Lunar Lockout Game"/>

        <section className="project-section">
          <h3>Game Description</h3>
          <p>
            Lunar Lockout is played on a square grid of size N×N. One cell contains the red “landed
            module” labeled <code>X</code>, and several cells hold immobile obstacles labeled
            <code>A</code> through <code>E</code>. Every move slides <code>X</code> in one of the
            four directions (up, down, left, right) until it collides with an obstacle; if a slide would
            cause <code>X</code> to move off the board,the move is considered invalid. The goal is to
            stop exactly at the central cell with specific color of the module. Each slide counts as a single move.
          </p>
        </section>

        <section className="project-section">
          <h3>State &amp; Move Representation</h3>
          <ul>
            <li>
              <strong>State:</strong> a 2D matrix of symbols: <code>0</code> = empty, <code>X</code> =
              player, <code>A–E</code> = obstacles.
            </li>
            <li>
              <strong>Move:</strong> tuple (<code>direction</code>), e.g. <code>'U'</code> for up.
              Applying a move simulates sliding until collision.
            </li>
            <li>
              <strong>Visualization:</strong> Pygame window displays the board and allows step-through
              of each algorithm, with controls to select map (levels 1–10) and algorithm.
            </li>
          </ul>
        </section>

        <section className="project-section">
          <h3>Algorithms Implemented</h3>
          <ul>
            <li>
              <strong>Breadth-First Search (BFS):</strong> explores by increasing move count,
              guaranteeing the fewest-slide solution.
            </li>
            <li>
              <strong>Depth-First Search (DFS):</strong> explores one branch deeply before backtracking,
              often finding a solution quickly but not guaranteed shortest.
            </li>
            <li>
              <strong>Greedy Search:</strong> selects the move minimizing a heuristic (Manhattan
              distance to goal), very fast but may not find optimal path.
            </li>
            <li>
              <strong>A* Search:</strong> combines path cost and heuristic to efficiently find an
              optimal solution.
            </li>
          </ul>
        </section>
      </section>

      <section className="project-section">
        <h3>Performance Comparison</h3>
        <table className="project-table">
          <thead>
            <tr>
              <th>Map</th>
              <th>BFS</th>
              <th>DFS</th>
              <th>Greedy</th>
              <th>A*</th>
            </tr>
          </thead>
          <tbody>
            {results.map(([map, bfs, dfs, gre, astar]) => (
              <tr key={map}>
                <td>{map}</td>
                <td>{bfs}</td>
                <td>{dfs}</td>
                <td>{gre}</td>
                <td>{astar}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="project-note">
          Averages — Visited States: BFS 811, DFS 366, Greedy 375.9, A* 588.9.
        </p>
        <p className="project-note">
          Averages — Depth: BFS 7.3, DFS 9.5, Greedy 8.4, A* 7.5.
        </p>
      </section>

      <section className="project-section">
        <h3>Conclusions</h3>
        <ul>
          <li>
            <strong>BFS &amp; A*:</strong> visit a similar number of states, but A* typically
            searches fewer levels (lower depth).
          </li>
          <li>
            <strong>DFS:</strong> explores fewer states overall but often goes much deeper.
          </li>
          <li>
            <strong>Greedy:</strong> extremely fast with few visited states, yet not guaranteed
            optimal.
          </li>
          <li>
            When minimal slide count is essential, I recommend BFS or A* (A* finds optimal cost-based solutions).
          </li>
        </ul>
      </section>
      <section className="project-section">
        <h3>Links</h3>
        <div className="icons">
          <a href="https://youtu.be/pBeJwEwYgks">
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

export default ISI;
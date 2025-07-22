import React from 'react';
import './Extracurriculars.css';

const Extracurriculars: React.FC = () => (
  <div className="page-container extracurriculars-page">
    <h1 className="center-heading">Extracurriculars</h1>
    <div className="extracurriculars-list">
      <div className="extracurriculars-card">
        <h2>Computer Science UIL <span role="img" aria-label="trophy">🏆</span></h2>
        <p>
          I compete in Computer Science UIL which involves having a vast knowledge of the Java Programming language along with the ability to work with a team of three to solve programming problems under a 2-to-3 hour time constraint. I’ve competed in multiple competitions in the past two school years and moved from the novice to the official UIL league.
        </p>
      </div>
      <div className="extracurriculars-card">
        <h2>CSOPS Club <span role="img" aria-label="teacher">👨‍🏫</span></h2>
        <p>
          I teach middle schoolers for an outreach program that was co-founded by a few of my friends and myself. This club helped advance my understanding of computer science and Python and Java as I was expected to answer several questions on those topics.
        </p>
      </div>
      <div className="extracurriculars-card">
        <h2>Speedcubing <span role="img" aria-label="cube">🧊</span></h2>
        <p>
          I also speed cube as a hobby which involves learning various algorithms for a diverse set of cases to solve a Rubik’s Cube as fast as possible. So far, after a decade of cubing, I sit around an average of 12.6 seconds which gets me in the top 15% of speed cubers worldwide.
        </p>
      </div>
    </div>
  </div>
);

export default Extracurriculars; 
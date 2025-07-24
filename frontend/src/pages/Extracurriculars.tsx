import React from 'react';
import './Extracurriculars.css';

const Extracurriculars: React.FC = () => (
  <div className="page-container extracurriculars-page">
    <h1 className="center-heading">Extracurriculars</h1>
    <div className="extracurriculars-list">
      <div className="extracurriculars-card">
        <h2><span className="keyword">Computer Science UIL</span> <span role="img" aria-label="trophy">🏆</span></h2>
        <p>
          I compete in <span className="keyword">Computer Science UIL</span> which involves having a vast knowledge of the <span className="keyword">Java</span> Programming language along with the ability to work with a team of three to solve <span className="keyword">programming problems</span> under a 2-to-3 hour <span className="keyword">time constraint</span>. I’ve competed in multiple competitions in the past two school years and moved from the novice to the <span className="keyword">official UIL league</span>.
        </p>
      </div>
      <div className="extracurriculars-card">
        <h2><span className="keyword">CSOPS Club</span> <span role="img" aria-label="teacher">👨‍🏫</span></h2>
        <p>
          I <span className="keyword">teach middle schoolers</span> for an outreach program that was <span className="keyword">co-founded</span> by a few of my friends and myself. This club helped advance my understanding of computer science and <span className="keyword">Python</span> and <span className="keyword">Java</span> as I was expected to answer several questions on those topics.
        </p>
      </div>
      <div className="extracurriculars-card">
        <h2><span className="keyword">Speedcubing</span> <span role="img" aria-label="cube">🧊</span></h2>
        <p>
          I also speed cube as a hobby which involves learning various algorithms for a diverse set of cases to solve a <span className="keyword">Rubik’s Cube</span> as fast as possible. So far, after a decade of cubing, I sit around an <span className="keyword">average of 12.6 seconds</span> which gets me in the <span className="keyword">top 15% of speed cubers worldwide</span>.
        </p>
      </div>
    </div>
  </div>
);

export default Extracurriculars; 
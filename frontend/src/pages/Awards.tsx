import React from 'react';
import './Awards.css';

const Awards: React.FC = () => (
  <div className="page-container awards-page">
    <h1>Awards</h1>
    <div className="awards-timeline">
      <div className="awards-year">
        <h2>2023</h2>
        <ul>
          <li>🥇 1st Place Novice Computer Science UIL Programming (Oct.)</li>
          <li>🥇 1st Place Novice Computer Science UIL Written (Dec.)</li>
          <li>🥈 2nd Place Novice Computer Science UIL Programming (Dec.)</li>
        </ul>
      </div>
      <div className="awards-year">
        <h2>2024</h2>
        <ul>
          <li>🥉 3rd Place Advanced Computer Science UIL Programming (Jan.)</li>
          <li>🥇 1st Place Advanced Computer Science UIL Programming (Apr.)</li>
          <li>🥈 2nd Place Advanced Computer Science UIL Written (Apr.)</li>
        </ul>
      </div>
      <div className="awards-year">
        <h2>2025</h2>
        <ul>
          <li>🥇 1st Place Cy-Fair District Computer Science UIL Programming (Mar.)</li>
          <li>🥇 1st Place Cy-Fair District Computer Science UIL Written (Mar.)</li>
          <li>🥇 1st Place Regional (All ISDs combined in Houston Region) Computer Science UIL Programming (Mar.)</li>
          <li>🥇 1st Place Regional Computer Science UIL Written (Mar.)</li>
          <li>🥈 2nd Place Texas state Computer Science UIL Programming (May)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Awards; 
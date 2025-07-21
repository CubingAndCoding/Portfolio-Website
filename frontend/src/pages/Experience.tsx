import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <div className="page-container experience-page">
    <h1>Experience</h1>
    <div className="experience-list">
      <div className="experience-card">
        <div className="experience-header">
          <span className="experience-icon">💻</span>
          <div>
            <h2>React Developer</h2>
            <h3>Zennapp LLC</h3>
          </div>
        </div>
        <ul className="experience-details">
          <li>Redeveloped the UI of a cross-platform application (Wenncet) using Ionic React, improving responsiveness and modernizing aesthetics to boost user engagement.</li>
          <li>Addressed and fixed security vulnerabilities to meet app store compliance.</li>
        </ul>
      </div>
      <div className="experience-card">
        <div className="experience-header">
          <span className="experience-icon">👨‍🏫</span>
          <div>
            <h2>Founding Member & Educator</h2>
            <h3>Computer Science Outreach Program for Students (CSOPS)</h3>
          </div>
        </div>
        <ul className="experience-details">
          <li>Created a high school club to educate middle school students in Python and Java.</li>
          <li>Primary educator for students of varying skill level.</li>
          <li>Helped expand the club to new schools and grow its impact.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience; 
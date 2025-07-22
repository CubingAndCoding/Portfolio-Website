import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <>
    <div className="page-container experience-page">
      <h1 className="center-heading">Professional Experience</h1>
    </div>
    <div className="experience-list">
      <div className="experience-card">
        <div className="experience-header">
          <div className="experience-icon">
            {/* Official React logo SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g>
                <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="currentColor" strokeWidth="2" />
                <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="currentColor" strokeWidth="2" transform="rotate(60 16 16)" />
                <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="currentColor" strokeWidth="2" transform="rotate(120 16 16)" />
                <circle cx="16" cy="16" r="2.5" fill="currentColor" />
              </g>
            </svg>
          </div>
          <div className="experience-info">
            <h2>React Developer</h2>
            <h3>Zennapp LLC</h3>
            <div className="experience-meta">
              <span className="experience-date">2023 - Present</span>
              <span className="experience-location">Remote</span>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <ul className="experience-details">
            <li>Redeveloped the UI of a <span className="keyword">cross-platform application</span> (<span className="keyword">Wenncet</span>) using <span className="keyword">Ionic React</span>, improving <span className="keyword">responsiveness</span> and modernizing <span className="keyword">aesthetics</span> to boost <span className="keyword">user engagement</span>.</li>
            <li>Addressed and fixed <span className="keyword">security vulnerabilities</span> to meet <span className="keyword">app store compliance</span>.</li>
            <li>Collaborated with <span className="keyword">cross-functional teams</span> to deliver <span className="keyword">high-quality software solutions</span>.</li>
          </ul>
        </div>
      </div>
      <div className="experience-card">
        <div className="experience-header">
          <div className="experience-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="experience-info">
            <h2>Founding Member & Educator</h2>
            <h3 style={{ fontSize: '1rem' }}>Computer Science Outreach Program for Students (CSOPS)</h3>
            <div className="experience-meta">
              <span className="experience-date">2022 - Present</span>
              <span className="experience-location">Cypress, TX</span>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <ul className="experience-details">
            <li>Created a <span className="keyword">high school club</span> to educate <span className="keyword">middle school students</span> in <span className="keyword">Python</span> and <span className="keyword">Java</span>.</li>
            <li>Primary <span className="keyword">educator</span> for students of varying skill level, developing <span className="keyword">customized curriculum</span>.</li>
            <li>Helped expand the club to <span className="keyword">new schools</span> and grow its <span className="keyword">impact</span> across the district.</li>
            <li>Mentored over <span className="keyword">50 students</span> in <span className="keyword">programming fundamentals</span> and <span className="keyword">problem-solving skills</span>.</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Experience; 
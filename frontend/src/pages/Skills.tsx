import React from 'react';
import './Skills.css';

const SkillChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="skill-chip">{children}</span>
);

const CertificationItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="certification-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
    </svg>
    {children}
  </div>
);

const Skills: React.FC = () => (
  <div className="page-container skills-page">
    <h1>Skills & Expertise</h1>
    
    <div className="skills-grid">
      <div className="skills-card">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 17L12 22L22 17" fill="currentColor"/>
            <path d="M2 12L12 17L22 12" fill="currentColor"/>
          </svg>
          Languages & Frameworks
        </h3>
        <div className="skills-chips">
          <SkillChip>🐍 Python</SkillChip>
          <SkillChip>🌐 Python Flask</SkillChip>
          <SkillChip>☕ Java</SkillChip>
          <SkillChip>⚛️ React</SkillChip>
          <SkillChip>🧩 Ionic Framework</SkillChip>
          <SkillChip>🦀 Rust</SkillChip>
          <SkillChip>🟨 JavaScript</SkillChip>
        </div>
      </div>

      <div className="skills-card">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.43-2.06c.04-.31.07-.63.07-.94s-.03-.63-.07-.94l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.23l-2.49 1a7.03 7.03 0 0 0-1.62-.94l-.38-2.65A.5.5 0 0 0 13 2h-4a.5.5 0 0 0-.5.42l-.38 2.65c-.59.23-1.14.54-1.62.94l-2.49-1a.5.5 0 0 0-.6.23l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65c-.04.31-.07.63-.07.94s.03.63.07.94l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.23l2.49-1c.48.4 1.03.71 1.62.94l.38 2.65A.5.5 0 0 0 9 22h4a.5.5 0 0 0 .5-.42l.38-2.65c.59-.23 1.14-.54 1.62-.94l2.49 1a.5.5 0 0 0 .6-.23l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor"/>
          </svg>
          Algorithms
        </h3>
        <div className="skills-chips">
          <SkillChip>🔁 Recursion</SkillChip>
          <SkillChip>📐 Dynamic Programming</SkillChip>
          <SkillChip>🌲 DFS</SkillChip>
          <SkillChip>🔗 Bellman-Ford</SkillChip>
          <SkillChip>➕ More</SkillChip>
        </div>
      </div>

      <div className="skills-card">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          Data Structures
        </h3>
        <div className="skills-chips">
          <SkillChip>🌳 Trees/Graphs</SkillChip>
          <SkillChip>🔗 Linked Lists</SkillChip>
          <SkillChip>🔤 Tries</SkillChip>
          <SkillChip>⛺ Heaps</SkillChip>
          <SkillChip>➕ More</SkillChip>
        </div>
      </div>

      <div className="skills-card">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          Certifications
        </h3>
        <div className="certifications-list">
          <CertificationItem>Microsoft Word Associate 2019</CertificationItem>
          <CertificationItem>Microsoft Excel Associate 2019</CertificationItem>
          <CertificationItem>Microsoft PowerPoint Associate 2019</CertificationItem>
        </div>
      </div>
    </div>
  </div>
);

export default Skills; 
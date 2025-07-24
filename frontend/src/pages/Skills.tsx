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
            <path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 2v2.2M12 19.8V22M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M2 12h2.2M19.8 12H22M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
            <circle cx="12" cy="6" r="3" fill="currentColor"/>
            <circle cx="7" cy="18" r="3" fill="currentColor"/>
            <circle cx="17" cy="18" r="3" fill="currentColor"/>
            <path d="M12 6L7 18M12 6L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
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
            <path d="M9 3V5H7V7H5V9H3V11H5V13H7V15H9V17H11V15H13V13H15V11H17V9H19V7H17V5H15V3H13V5H11V7H9V5H7V3H9ZM11 9H13V11H11V9ZM9 9H7V11H9V9ZM15 9H17V11H15V9Z" fill="currentColor"/>
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
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 17L12 22L22 17" fill="currentColor"/>
            <path d="M2 12L12 17L22 12" fill="currentColor"/>
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
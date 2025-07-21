import React from 'react';
import './Skills.css';

const SkillChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="skill-chip">{children}</span>
);

const Skills: React.FC = () => (
  <div className="page-container skills-page">
    <h1>Skills</h1>
    <div className="skills-group">
      <h2>Languages & Frameworks</h2>
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
    <div className="skills-group">
      <h2>Algorithms</h2>
      <div className="skills-chips">
        <SkillChip>🔁 Recursion</SkillChip>
        <SkillChip>📐 Dynamic Programming</SkillChip>
        <SkillChip>🌲 DFS</SkillChip>
        <SkillChip>🔗 Bellman-Ford</SkillChip>
        <SkillChip>➕ More</SkillChip>
      </div>
    </div>
    <div className="skills-group">
      <h2>Data Structures</h2>
      <div className="skills-chips">
        <SkillChip>🌳 Trees/Graphs</SkillChip>
        <SkillChip>🔗 Linked Lists</SkillChip>
        <SkillChip>🔤 Tries</SkillChip>
        <SkillChip>⛺ Heaps</SkillChip>
        <SkillChip>➕ More</SkillChip>
      </div>
    </div>
    <div className="skills-group certifications-group">
      <h2>Certifications</h2>
      <div className="certifications-list">
        <div className="certification-item">📄 Microsoft Word Associate 2019</div>
        <div className="certification-item">📊 Microsoft Excel Associate 2019</div>
        <div className="certification-item">📽️ Microsoft PowerPoint Associate 2019</div>
      </div>
    </div>
  </div>
);

export default Skills; 
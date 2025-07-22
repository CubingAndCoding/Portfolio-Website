import React from 'react';
// Center headings locally for this page
const educationStyle = `<style>.center-heading { text-align: center; }</style>`;

const Education: React.FC = () => (
  <>
    {educationStyle && <div dangerouslySetInnerHTML={{ __html: educationStyle }} />}
  <div className="page-container education-page">
    <h1 className="center-heading">Education</h1>
    <div className="education-card">
      <h2 className="center-heading">Cypress Woods High School</h2>
      <p>Senior Year</p>
    </div>
  </div>
  </>
);

export default Education; 
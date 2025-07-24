import React from 'react';
// Center headings locally for this page
const resumeStyle = `<style>.center-heading { text-align: center; }</style>`;

const Resume: React.FC = () => (
  <>
    {resumeStyle && <div dangerouslySetInnerHTML={{ __html: resumeStyle }} />}
  <div className="page-container resume-page">
    <h1 className="center-heading">Résumé</h1>
    <div className="resume-card">
      <p>My full résumé is available upon request. Please contact me at <a href="mailto:alaqmartrunk@gmail.com">alaqmartrunk@gmail.com</a> if you would like a copy.</p>
    </div>
  </div>
  </>
);

export default Resume; 
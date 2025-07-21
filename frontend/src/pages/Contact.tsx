import React from 'react';

const Contact: React.FC = () => (
  <div className="page-container contact-page">
    <h1>Contact</h1>
    <div className="contact-card">
      <p>Email: <a href="mailto:alaqmartrunk@gmail.com">alaqmartrunk@gmail.com</a></p>
      <div className="contact-links">
        <a href="#">LinkedIn</a>
        <span>·</span>
        <a href="#">Itch.io</a>
        <span>·</span>
        <a href="#">YouTube</a>
      </div>
    </div>
  </div>
);

export default Contact; 
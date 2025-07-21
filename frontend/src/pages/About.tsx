import React from 'react';

const About: React.FC = () => (
  <div className="page-container about-page">
    <div className="about-profile-card" style={{ marginBottom: '2.5rem' }}>
      <div className="profile-img-placeholder" />
      <div className="about-profile-info">
        <h1>Alaqmar Trunkwala</h1>
        <p className="about-location">Cypress, TX</p>
        <div className="about-contact-links">
          <a href="mailto:alaqmartrunk@gmail.com">alaqmartrunk@gmail.com</a>
          <span>·</span>
          <a href="#">LinkedIn</a>
          <span>·</span>
          <a href="#">Itch.io</a>
          <span>·</span>
          <a href="#">YouTube</a>
        </div>
      </div>
    </div>
    <section className="about-bio-section">
      <h2>About Me</h2>
      <p className="about-bio">
        I am currently going into my Senior year at Cypress Woods High School and am an aspiring Computer Science professional. As a first step towards my goal, I am a Computer Science III K course in High School and actively participate in UIL competitions. Taking part in Computer Science UIL competitions has helped me with many soft-skills including communication skills, organizational skills, and team-based skills. Also, many years of dedicated speed cubing has taught me to welcome challenges to learn and become better overall. As of now, I’m looking for internship and part-time job opportunities to further my skill set and knowledge of the computer science field.
      </p>
    </section>
  </div>
);

export default About; 
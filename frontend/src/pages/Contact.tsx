import React from 'react';
import controllerImage from '../assets/controller.png';
// Center headings locally for this page
const contactStyle = `<style>.center-heading { text-align: center; }
.contact-hero {
  margin-bottom: 0px;
}
.contact-hero h1 {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary-blue, #2563eb);
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 2px 12px rgba(37,99,235,0.08);
}
@media (max-width: 600px) {
  .contact-hero h1 {
    font-size: 1.5rem;
  }
}
@media (prefers-color-scheme: light) {
  .contact-hero h1 {
    color: #174ea6;
    text-shadow: 0 2px 12px rgba(23,78,166,0.10);
  }
}
</style>`;

const Contact: React.FC = () => (
  <>
    {contactStyle && <div dangerouslySetInnerHTML={{ __html: contactStyle }} />}
  <div className="page-container contact-page">
    <div className="contact-hero">
      <h1 className="center-heading">Let's Build Something Amazing Together</h1>
      <p className="contact-subtitle">
        Whether you have a project in mind, want to discuss opportunities, or just want to chat about tech, 
        I'd love to hear from you. Let's turn ideas into reality.
      </p>
    </div>
    
    <div className="contact-grid">
      {/* Contact Me */}
      <div className="contact-section primary-contact">
        <h2 className="center-heading">Contact Me</h2>
        <div className="contact-methods-grid">
          <a className="contact-method primary" href="mailto:alaqmartrunk@gmail.com">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="icon-glow"></div>
            </div>
            <div className="method-content">
              <h3>Email</h3>
              <p>Ready to start a conversation? Drop me a line!</p>
            </div>
          </a>
          
          <a className="contact-method primary" href="#" target="_blank" rel="noopener noreferrer">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 13.2C14.39 13.2 13.4 13.83 13.4 15.2V18.5H11.1V9.3H13.4V10.63C13.4 10.63 14.39 9.3 16.2 9.3C18.5 9.3 18.5 11.3 18.5 13.2V18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V9.3H5.5V18.5H8.27Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="icon-glow"></div>
            </div>
            <div className="method-content">
              <h3>LinkedIn</h3>
              <p>Let's connect professionally and stay in touch!</p>
            </div>
          </a>
        </div>
      </div>

      {/* My Code */}
      <div className="contact-section secondary-contact">
        <h2 className="center-heading">My Code</h2>
        <div className="contact-methods-grid">
          <a className="contact-method secondary" href="#" target="_blank" rel="noopener noreferrer">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="method-content">
              <h3>GitHub</h3>
              <p>Explore my code and open source projects</p>
            </div>
          </a>
          
          <a className="contact-method secondary" href="#" target="_blank" rel="noopener noreferrer">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="method-content">
              <h3>LeetCode</h3>
              <p>Check out my problem-solving skills</p>
            </div>
          </a>
        </div>
      </div>

      {/* My Content */}
      <div className="contact-section secondary-contact">
        <h2 className="center-heading">My Content</h2>
        <div className="contact-methods-grid">
          <a className="contact-method secondary" href="#" target="_blank" rel="noopener noreferrer">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <img 
                  src={controllerImage} 
                  alt="Game Controller"
                  style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>
            <div className="method-content">
              <h3>Itch.io</h3>
              <p>Check out my game development projects</p>
            </div>
          </a>
          
          <a className="contact-method secondary" href="#" target="_blank" rel="noopener noreferrer">
            <div className="method-icon-wrapper">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.83 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.83 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.17 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.17 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="method-content">
              <h3>YouTube</h3>
              <p>Watch my tutorials and tech content</p>
            </div>
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="contact-section stats-section">
        <h2 className="center-heading">Quick Facts</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Jobless 💔</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Project Completion</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Learning Mindset</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default Contact; 
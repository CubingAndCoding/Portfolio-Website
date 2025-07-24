import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 550;
      setIsSmallScreen(isSmall);
      
      // Debug logging
      console.log('Screen width:', window.innerWidth, 'Is small:', isSmall);
      
      // Force CSS custom property update
      document.documentElement.style.setProperty('--card-width', isSmall ? '100%' : '500px');
      document.documentElement.style.setProperty('--card-max-width', isSmall ? '100%' : '500px');
      document.documentElement.style.setProperty('--card-min-width', isSmall ? '0' : '0');
      document.documentElement.style.setProperty('--card-height', isSmall ? 'auto' : '560px');
      document.documentElement.style.setProperty('--card-min-height', isSmall ? '400px' : '560px');
      document.documentElement.style.setProperty('--card-max-height', isSmall ? 'none' : '560px');
      
      // Force DOM update with setTimeout
      setTimeout(() => {
        const cards = document.querySelectorAll('.experience-card');
        cards.forEach(card => {
          if (isSmall) {
            (card as HTMLElement).style.width = '100%';
            (card as HTMLElement).style.maxWidth = '100%';
            (card as HTMLElement).style.minWidth = '0';
            (card as HTMLElement).style.height = 'auto';
            (card as HTMLElement).style.minHeight = '400px';
            (card as HTMLElement).style.maxHeight = 'none';
          } else {
            (card as HTMLElement).style.width = '500px';
            (card as HTMLElement).style.maxWidth = '500px';
            (card as HTMLElement).style.minWidth = '0';
            (card as HTMLElement).style.height = '560px';
            (card as HTMLElement).style.minHeight = '560px';
            (card as HTMLElement).style.maxHeight = '560px';
          }
        });
      }, 0);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cardStyle = isSmallScreen ? {
    width: '100vw',
    maxWidth: '100vw',
    minWidth: '0',
    height: 'auto',
    minHeight: '400px',
    maxHeight: 'none',
    boxSizing: 'border-box' as const,
    transform: 'none',
    flexShrink: 1,
    flexGrow: 1,
    margin: '0',
    padding: 'var(--space-8) var(--space-4)'
  } : {};

  const headerStyle = isSmallScreen ? {
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    textAlign: 'center' as const,
    gap: 'var(--space-4)',
    height: 'auto',
    minHeight: '120px'
  } : {};

    return (
    <>
      {isSmallScreen && (
        <style>
          {`
            .experience-card,
            .experience-page .experience-card,
            .page-container .experience-card,
            .experience-list .experience-card,
            ion-app .experience-card,
            .ion-page .experience-card {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              height: auto !important;
              min-height: 400px !important;
              max-height: none !important;
              box-sizing: border-box !important;
              transform: none !important;
              flex: 1 1 100% !important;
            }
            
            .experience-list {
              width: 100% !important;
              max-width: 100% !important;
              grid-template-columns: 1fr !important;
            }
            
            .experience-header {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: var(--space-4) !important;
              height: auto !important;
              min-height: 120px !important;
            }
          `}
        </style>
      )}
      <div className="page-container experience-page">
      <h1 className="center-heading">Professional Experience</h1>
    </div>
    <div className={`experience-list ${isSmallScreen ? 'ion-no-padding' : ''}`}>
      <div className={`experience-card ${isSmallScreen ? 'ion-full-width' : ''}`} style={cardStyle}>
        <div className="experience-header" style={headerStyle}>
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
            <li>Redeveloped the UI of a <span className="keyword">cross-platform application</span> (<span className="keyword">Wennect</span>) using <span className="keyword">Ionic React</span>, improving <span className="keyword">responsiveness</span> and modernizing <span className="keyword">aesthetics</span> to boost <span className="keyword">user engagement</span>.</li>
            <li>Addressed and fixed <span className="keyword">security vulnerabilities</span> to meet <span className="keyword">app store compliance</span>.</li>
            <li>Collaborated with <span className="keyword">cross-functional teams</span> to deliver <span className="keyword">high-quality software solutions</span>.</li>
          </ul>
        </div>
      </div>
      <div className={`experience-card ${isSmallScreen ? 'ion-full-width' : ''}`} style={cardStyle}>
        <div className="experience-header" style={headerStyle}>
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
};

export default Experience; 
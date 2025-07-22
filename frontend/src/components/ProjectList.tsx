import React, { useEffect, useState } from 'react';
import './ProjectList.css';

interface Project {
  title: string;
  description: string;
  image: string;
  language: string;
  month: string;
  year: string;
  download?: string;
}

const BACKEND_URL = 'http://localhost:5000'; // Change to your deployed backend if needed

const languageColors: Record<string, string> = {
  Java: '#f89820',
  Python: '#3572A5',
};

const monthOrder: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
};

function isUrl(str: string) {
  return /^https?:\/\//.test(str);
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        // Sort by year (desc), then month (desc)
        data.sort((a: Project, b: Project) => {
          if (b.year !== a.year) return parseInt(b.year) - parseInt(a.year);
          return monthOrder[b.month] - monthOrder[a.month];
        });
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load projects');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-text">Loading your projects...</p>
      <div className="loading-skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-description short"></div>
              <div className="skeleton-chip"></div>
              <div className="skeleton-date"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <div className="error-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z" fill="currentColor"/>
        </svg>
      </div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{error}</p>
      <button 
        className="error-retry-btn"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );

  if (projects.length === 0) {
    return (
      <div className="empty-container">
        <div className="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 13H7V11H17V13ZM13 17H7V15H13V17ZM7 7V9H17V7H7Z" fill="currentColor"/>
          </svg>
        </div>
        <h3 className="empty-title">No projects yet</h3>
        <p className="empty-message">Projects will appear here once they're added to the portfolio.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div
            className="project-card clickable"
            key={idx}
            onClick={() => setSelectedProject(project)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
          >
            <div className="card-content">
              <img
                src={`${BACKEND_URL}/static/${project.image}`}
                alt={project.title}
                className="project-image"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span
                  className="language-chip"
                  style={{ backgroundColor: languageColors[project.language] || '#ccc' }}
                >
                  {project.language}
                </span>
                <div className="project-date">
                  {project.month} {project.year}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-card">
              <img
                src={`${BACKEND_URL}/static/${selectedProject.image}`}
                alt={selectedProject.title}
                className="modal-image"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              {selectedProject.download && (
                <a
                  className="download-btn"
                  href={isUrl(selectedProject.download) ? selectedProject.download : `${BACKEND_URL}/static/${selectedProject.download}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download
                </a>
              )}
            </div>
            <button className="close-modal-btn" onClick={() => setSelectedProject(null)} aria-label="Close">×</button>
            <span
              className="modal-language-chip"
              style={{ backgroundColor: languageColors[selectedProject.language] || '#ccc' }}
            >
              {selectedProject.language}
            </span>
            <div className="modal-project-date">
              {selectedProject.month} {selectedProject.year}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList; 
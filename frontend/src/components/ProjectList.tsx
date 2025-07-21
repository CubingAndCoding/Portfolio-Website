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

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>{error}</div>;

  if (projects.length === 0) {
    return <div>No projects available.</div>;
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
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <img
              src={`${BACKEND_URL}/static/${selectedProject.image}`}
              alt={selectedProject.title}
              className="modal-image"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <span
              className="language-chip"
              style={{ backgroundColor: languageColors[selectedProject.language] || '#ccc' }}
            >
              {selectedProject.language}
            </span>
            <div className="project-date">
              {selectedProject.month} {selectedProject.year}
            </div>
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
            <button className="close-modal-btn" onClick={() => setSelectedProject(null)} aria-label="Close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList; 
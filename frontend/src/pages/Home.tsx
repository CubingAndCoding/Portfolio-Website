import ProjectList from '../components/ProjectList';
import './Home.css';

const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Projects</h2>
      <ProjectList />
    </div>
  );
};

export default Projects;

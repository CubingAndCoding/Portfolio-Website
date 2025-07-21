import React, { useState } from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Extracurriculars from './pages/Extracurriculars';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

const RubiksCubeWidget: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="cube-modal-overlay" onClick={onClose}>
    <div className="cube-modal" onClick={e => e.stopPropagation()}>
      <div className="cube-modal-header">
        <h2>Rubik's Cube Widget (Easter Egg)</h2>
        <button className="close-cube-btn" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="cube-modal-content">
        <div className="cube-placeholder-img" />
        <p>Rubik's Cube game coming soon!</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [cubeOpen, setCubeOpen] = useState(false);
  return (
    <IonApp>
      <IonReactRouter>
        <Navbar onCubeClick={() => setCubeOpen(true)} />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/awards" component={Awards} />
            <Route path="/extracurriculars" component={Extracurriculars} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
        {cubeOpen && <RubiksCubeWidget onClose={() => setCubeOpen(false)} />}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

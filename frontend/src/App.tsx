import React, { useState, useEffect } from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Extracurriculars from './pages/Extracurriculars';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import RubiksCube from './components/RubiksCube';
import './App.css';



const RubiksCubeWidget: React.FC<{ onClose: () => void; cubeKey: number }> = ({ onClose, cubeKey }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="cube-modal-overlay">
      <div className="cube-modal" onClick={e => e.stopPropagation()}>
        <button className="close-modal-btn close-cube-btn" onClick={onClose} aria-label="Close">×</button>
        <div className="cube-modal-header">
          <h2>Rubik's Cube Coming Soon...</h2>
        </div>
        <div className="cube-modal-content">
          <RubiksCube canvasKey={cubeKey} />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showCubeWidget, setShowCubeWidget] = useState(false);
  const [cubeWidgetKey, setCubeWidgetKey] = useState(0);

  const openCubeWidget = () => {
    setCubeWidgetKey(k => k + 1);
    setShowCubeWidget(true);
  };
  const closeCubeWidget = () => setShowCubeWidget(false);

  return (
    <IonApp>
      <IonReactRouter>
        <Navbar onCubeClick={openCubeWidget} />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/awards" component={Awards} />
            <Route path="/extracurriculars" component={Extracurriculars} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
        {showCubeWidget && <RubiksCubeWidget onClose={closeCubeWidget} cubeKey={cubeWidgetKey} />}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

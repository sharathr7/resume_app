
import './App.css';
import { Certification } from './components/certification';
import { Experience } from './components/experience';
import { Header1,Header2 } from './components/header';
import Project from './components/project';
import Skill from './components/skill';

function App() {
  return (
    <div className="App">
        <Header1/>
        <Header2/>
        <hr></hr>
        <Certification/>
        <hr></hr>
        <Experience/>
        <hr></hr>
        <Project/>
        <hr></hr>
        <Skill/>
        <hr></hr>
    </div>
  );
}

export default App;

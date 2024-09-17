import React from 'react';
import './Home.css';

const Home = () => {
  return (<>
    <div className="home-container">
      <div className="skills-container">
        <div className="skills">
          <h1>SKILLS</h1>
          <br/>
          <p>- Python</p>
          <p>- Java</p>
          <p>- C/C++</p>
          <p>- Assembly</p>
          <p>- Terraform</p>
          <p>- Ansible</p>
          <p>- Jenkins</p>
          <p>- Docker</p>
          <p>- AWS</p>
          <p>- React</p>
          <p>- Javascript</p>
        </div>
      </div>
      <div className="diamond-container">
        <div className="diamond">
          <div className="diamond-content">
            <h4 style={{ textWrap: "nowrap" }}>Saaed Darwish</h4>
            <p>Pursuing a Bachelor of Science<br />in Software Engineering at the<br />University of Calgary</p>
          </div>
          <div className="underline-right"></div>
          <div className="underline-left"></div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects">
          <h1>PROJECTS</h1>
          <br/>
          <h2><a href="wordle">Wordle</a></h2>
          <h2><a href="lotion">Lotion</a></h2>
          <h2><a href="rhythm-game">Rhythm Game</a></h2>
          <h2><a href="scheduler">Scheduler</a></h2>
          <h2><a href="divinity">Divinity</a></h2>
        </div>
      </div>
    </div>
  </>);
}

export default Home;

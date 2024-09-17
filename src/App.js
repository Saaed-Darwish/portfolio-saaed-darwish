import React from 'react';
import './App.css';
import Home from './Home';
import Lotion from './Lotion';
import RhythmGame from './RhythmGame';
import Divinity from './Divinity';
import Schedular from './Schedular';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="wordle" element={<WordleHTML/>}/>
        <Route exact path="lotion" element={<Lotion/>}/>
        <Route exact path="rhythm-game" element={<RhythmGame/>}/>
        <Route exact path="divinity" element={<Divinity/>}/>
        <Route exact path="schedular" element={<Schedular/>}/>
        {/*
        <Route path="/NextPage" exact={true} element={<NextPage/>}/>
        */}
      </Routes>
    </Router>
  )
}

function WordleHTML() {
  return (
      <div>
          <iframe
              src="/wordle/index.html"  // Points to your HTML file in the public folder
              width="100%"
              height="100%"
              title="Example HTML"
          />
      </div>
  );
}

export default App;
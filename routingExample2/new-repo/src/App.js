import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Page1 /> } />
        <Route path="/page1" element={ <Page1 /> } />
        <Route path="/page2" element={ <Page2 /> } />
      </Routes>
    </Router>
  )
}

export default App;


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

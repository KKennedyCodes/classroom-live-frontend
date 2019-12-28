import React from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import CourseList from './components/courses/CourseList.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// src/components/nav_tools/NavBar.js

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavBar />
        <CourseList />
      </nav>
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
    </div>
  );
}

export default App;



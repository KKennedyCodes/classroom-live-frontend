import React from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import CourseList from './components/courses/CourseList.js';
import Course from './components/courses/Course.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// src/components/nav_tools/NavBar.js

function App() {
  return (
    <div className="App">
      <section className="Container">
        <header><NavBar /></header>
        <menu><CourseList /></menu>
        <main><Course /></main>
        <footer></footer>
      </section>
    </div>
  );
}

export default App;



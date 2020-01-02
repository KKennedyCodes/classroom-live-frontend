import React from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
import LiveTeacher from './components/live/LiveTeacherView.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from "react-router-dom";
// src/components/nav_tools/NavBar.js
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: true,
      userId: 1,
      live: true,
      liveSession: undefined,
    }
  }

  login = () => {
    this.setState({
      loggedIn: true,
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
    })
  }

  notLive = () => {
    return (
    <section className="AppContainer">
            <header>
              <NavBar loggedIn={this.state.loggedIn} login={this.login} logout={this.logout}/>
            </header>
            <section>
              {this.state.loggedIn ? <Dashboard /> : <Home />}
            </section>
            <footer>
                  <p>Classroom Live - Created By Katie Kennedy, Ada Developers Academy - Cohort 12</p>
            </footer>
            </section>
    )
  }

  live = () => {
    return <LiveTeacher />
  }

  render () {
  return (
  <Router>
        <div className="App">
          {this.state.live ? this.live() : this.notLive()}
        </div>
  </Router>

  );
}}

export default App;



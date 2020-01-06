import React from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import Home from './components/Home.js';
import ShowAlert from './components/ShowAlert.js';
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
      userId: undefined,
      live: false,
      liveSession: undefined,
      alertShow: false,
      alertText: '',
      alertVariant: '',
      }
    }

  login = () => {
    this.setState({
      loggedIn: true,
      userId: 1,
      alertText: 'Successfully Signed In',
      alertVariant: 'success',
    });
    this.showAlert();
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      userId: undefined
    })
  }

  startLive = () => {
    this.setState({
      live: true,
    })
  }

  endLive = () => {
    this.setState({
      live: false,
    })
  }

  showAlert = () => {
    this.setState({
      alertShow: true,
    });
  }

  hideAlert = () => {
    this.setState({
      alertShow: false,
    });
  }

  notLive = () => {
    return (
    <section className="AppContainer">
            <header>
              <NavBar loggedIn={this.state.loggedIn} login={this.login} logout={this.logout} live={this.startLive}/>
            </header>
            <section>
            {this.state.alertShow ? <ShowAlert variant={this.state.alertVariant} text={this.state.alertText} hideAlert={this.hideAlert}/> : ''}
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
        <section className="App">
          {this.state.live ? this.live() : this.notLive()}
        </section>
  </Router>

  );
}};

export default App;



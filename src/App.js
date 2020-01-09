import React from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
// import Moment from 'react-moment';
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
    // this.showAlert();
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      userId: undefined,
      alertText: 'Successfully Signed Out',
      alertVariant: 'warning',
    })
  }

  welcome = () => {
    return (
    <section className="AppContainer">
            <header>
              <NavBar loggedIn={this.state.loggedIn} login={this.login} logout={this.logout} />
            </header>
            <section>
              {this.state.loggedIn ? <Dashboard user={this.state.userId} /> : <Home />}
            </section>
            <footer>
                  <p>Classroom Live - Created By Katie Kennedy, Ada Developers Academy - Cohort 12</p>
            </footer>
            </section>
    )
  }

render () {

  return (
  <Router>
        <section className="App">
          {this.welcome()}
        </section>
  </Router>

  );
}};

export default App;



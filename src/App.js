import React from 'react';
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/nav_tools/NavBar.js';
import CourseList from './components/courses/CourseList.js';
import Course from './components/courses/Course.js';
import LiveStudentView from './components/live/LiveStudentView.js';
import LiveForm from './components/input/LiveForm.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// src/components/nav_tools/NavBar.js
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render () {
  return (
    <Router>
        <div className="App">
          <section className="Container">
            <header>
              <NavBar />
              {/* <li><NavLink to="/video-store-consumer/search">Search</NavLink></li>
              <li><NavLink to="/video-store-consumer/movies">Movies</NavLink></li>
              <li><NavLink to="/video-store-consumer/customers">Customers</NavLink></li>
              <li><NavLink to="/video-store-consumer/rentals">Rentals</NavLink></li> */}
            </header>
            <menu><CourseList /></menu>
            <main>
              <div className="content">
                {/* <Route path="/dashboard" component={LiveForm}/> */}
                <Route path="/live" component={LiveStudentView}/>
                <Route path="/courses/:id" component={Course}/>
                {/* <Route path="/video-store-consumer/movies" render={() => <RentalLibrary selectMovie={this.selectMovie}/>}/>
                <Route path="/video-store-consumer/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
                <Route path="/video-store-consumer/rentals" component={RentalsList}/> */}
              </div>

            </main>
            <footer>

            </footer>
            
            </section>
          </div>
      </Router>
  );
}}

export default App;



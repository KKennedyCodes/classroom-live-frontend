import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Katie",
      course: 1,
    };
  }
    
  render () {
    return (
      <section className='navContainer'>
        <div className="title"><img src="https://live.staticflickr.com/65535/49296000551_fe05df3618_b.jpg" className="title logo" alt="ClassroomLogo" /><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></div>
        <div className="TopButton"><NavLink to="/dashboard">
          <Button variant="light">Dashboard</Button></NavLink>
        </div>
        <div className="TopButton"><NavLink to="/live">
          <Button variant="outline-danger">Go Live</Button></NavLink>
        </div>
        <div className="TopButton"><NavLink to="/logout">
          <Button variant="light">Logout</Button></NavLink>
        </div>
      </section>
    )};
}

export default NavBar;
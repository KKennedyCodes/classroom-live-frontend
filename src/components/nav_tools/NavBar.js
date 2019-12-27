import React, { Component } from 'react';
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
      <nav className="nav">
        <h2>Classroom Live - Welcome, {this.state.user}!</h2>
        <p>Go Live</p>
        <p>Logout</p>
      </nav>
    )};
}

export default NavBar;
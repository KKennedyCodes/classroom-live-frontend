import React, { Component } from 'react';
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
      <nav>
        <h2 className="title">Classroom Live - Welcome, {this.state.user}!</h2>
        <div><Button variant="outline-danger" className="TopButton">Go Live </Button></div>
        <div><Button variant="light" className="TopButton">Logout</Button></div>
      </nav>
    )};
}

export default NavBar;
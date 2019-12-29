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
      <section className='navContainer'>
        <div className="title"><h2>Classroom Live</h2></div>
        <div className="TopButton"><Button variant="outline-danger">Go Live </Button></div>
        <div className="TopButton"><Button variant="light">Logout</Button></div>
      </section>
    )};
}

export default NavBar;
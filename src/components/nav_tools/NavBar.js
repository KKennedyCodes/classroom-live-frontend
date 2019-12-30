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
        <div className="title"><a data-flickr-embed="true" href="https://www.flickr.com/photos/186234157@N07/49296000551/in/dateposted-public/" title="ClassroomLogo"><img src="https://live.staticflickr.com/65535/49296000551_fe05df3618_b.jpg" className="title logo" alt="ClassroomLogo" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></div>
        <div className="TopButton"><Button variant="outline-danger">Go Live </Button></div>
        <div className="TopButton"><Button variant="light">Logout</Button></div>
      </section>
    )};
}

export default NavBar;
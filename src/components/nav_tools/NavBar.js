import React from 'react';
import { NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Katie",
      course: 1,
    };
  }
  
  logIn = () => {
    return (
      <section className='logInView'>
      <div className="TopButton"><NavLink to="/dashboard">
      <Button variant="light" onClick={this.props.login}>Login</Button></NavLink>
      </div>
      </section>
      );
    }
    
    loggedInTools = () => {
      return (
        
        <section className='navContainer'>
        <div className="title"><img src="https://live.staticflickr.com/65535/49296000551_fe05df3618_b.jpg" className="title logo" alt="ClassroomLogo" /><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script></div>
        <div className="TopButton"><NavLink to="/dashboard">
        <Button variant="light">Dashboard</Button></NavLink>
        </div>
        <div className="TopButton"><NavLink to="/startlive">
        <Button variant="outline-danger">Go Live</Button></NavLink>
        </div>
        <div className="TopButton"><NavLink to="/">
        <Button variant="light" onClick={this.props.logout}>Logout</Button></NavLink>
        </div>
        </section>
        );
      }
      render () {
        
        return (
          
          <section className='navContainer'>
          {this.props.loggedIn ? this.loggedInTools() : this.logIn()}
          </section>
          
          )};
        }
        
        export default NavBar;
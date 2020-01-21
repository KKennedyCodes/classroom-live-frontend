import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component {



  render () {
  return (
    <section className="HomeContent">
            <img src="https://live.staticflickr.com/65535/49296000551_fe05df3618_b.jpg" className="homeTitle" alt="ClassroomLogo" />
            <h4 className="HomeDescription">A Digital Classroom Management Tool for Teachers Who Want to <br/>Facilitate Effective Work Time and Track Student Need</h4>
      
    </section>
  );
}
}



export default Home;

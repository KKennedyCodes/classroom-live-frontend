import React from 'react';
// import SessionList from '../sessions/SessionList.js';
// import axios from 'axios';
// import { withRouter } from "react-router-dom";
import './Course.css';

class CourseDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    };
  }

render () {
  return (
      <section className="body">
        <h3>{this.props.course.title}</h3>
        <p>Section: {this.props.course.section}</p>
        <p>Teacher ID: {this.props.course.user_id}</p>
        <p>Code: {this.props.course.section}</p>
      </section>
      );
}
}
export default CourseDetails;

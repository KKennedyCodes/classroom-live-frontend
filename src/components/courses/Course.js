import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import SessionList from '../sessions/SessionList.js';
import './Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseSelected: true,
      students: [1,2,3],
      sessionIds: [1,2,3,4,5],
    };
  }
    
  render () {
    console.log(this.props.course);
    return (
      <section className="body">
        <section className="CourseDetails">
            <h4>{this.props.course.course.title}</h4>
            <p>Instructor: {this.props.course.course.user_id}</p>
            <p>Section: {this.props.course.course.section} <br />Code: {this.props.course.course.code}</p>
          <section className="courseSpecs">
            {/* <p>{this.state.students.length} Students    •   {this.state.sessionIds.length} Logs   •   Avg. Wait Time</p> */}
          </section>
        </section>
        <section>
          <p className="subTitle">Classroom Live Log:</p>
          {/* <SessionList course={this.props.course.id} /> */}
          <SessionList course={this.props.course.course.id} />
        </section>
      </section>
    )};
}

export default Course;
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import SessionList from '../sessions/SessionList.js';
import './Course.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseSelected: true,
      courseTitle: "History 101",
      courseSection: "Period 1",
      externalID: undefined,
      courseCode: "af4kp89b",
      students: [1,2,3],
      sessionIds: [1,2,3,4,5],
    };
  }
    
  render () {
    return (
      <div>
      <section className="CourseDetails">
        <p>{this.state.courseTitle}</p>
        <p>{this.state.courseSection}</p>
        <p>{this.state.students.length} Students</p>
        <p>●</p>
        <p>{this.state.sessionIds.length} Logs</p>
        <p>●</p>
        <p>Avg. Wait Time</p>
      </section>
      <section>
        <p>Classroom Live Log</p>
        <SessionList />
      </section>
      </div>
    )};
}

export default Course;
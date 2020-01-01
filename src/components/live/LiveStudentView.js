import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import SessionList from '../sessions/SessionList.js';
// import './LiveStudentView.css';

class LiveStudentView extends React.Component {
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
      <div className="body">
        <section className="CourseDetails">
          <div>
            <h4>{this.state.courseTitle}</h4>
            <p>{this.state.courseSection}</p>
          </div>
          <div className="courseSpecs">
            <p>{this.state.students.length} Students    •   {this.state.sessionIds.length} Logs   •   Avg. Wait Time</p>
          </div>
        </section>
        <section>
          <p className="subTitle">Classroom Live Log:</p>
          <SessionList />
        </section>
      </div>
    )};
}

export default LiveStudentView;
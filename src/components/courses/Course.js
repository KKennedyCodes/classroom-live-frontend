import React from 'react';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
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
      <section className="body">
        <section className="CourseDetails">
            {/* <h4>{this.props.course.course.title}</h4>
            <p>{this.props.course.course.section}</p> */}
            {/* <p>Course Code: {this.props.course.course.code}</p> */}
          <section className="courseSpecs">
            <p>{this.state.students.length} Students    •   {this.state.sessionIds.length} Logs   •   Avg. Wait Time</p>
          </section>
        </section>
        <section>
          <p className="subTitle">Classroom Live Log:</p>
          <SessionList />
        </section>
      </section>
    )};
}

export default Course;
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Session from './Session.js';
import './Session.css';

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
      logs: [1,2,3,4,5],
    };
  }

displaySessions = () => {
   
    const sessionList = this.state.logs.map((date, i) => {
      return <Session date={date} value={i} className="courseSession" />
    });

    return sessionList;
  }
    
  render () {
    return (
      <div>
        <Accordion defaultActiveKey="0">
        {this.displaySessions()}
        </Accordion>
      </div>
    )};
}

export default Course;
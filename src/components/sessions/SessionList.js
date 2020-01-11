import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Session from './Session.js';
// import axios from 'axios';
import './Session.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.displaySessions();
  }
 
  displaySessions = () => {
    console.log(this.props);
    const sessionList = this.props.sessions.map((session, i) => {
        return <Session date={session.created_at} selectSession={this.props.selectSession} task={session.task} taskObjective={session.task_objective} id={session.id} value={i} key={i}/>
      });
    return sessionList;
  }
    
  render () {
    return (
      <section>
        <Accordion defaultActiveKey="0">
        {this.displaySessions()}
        </Accordion>
      </section>
    )};
}

export default Course;
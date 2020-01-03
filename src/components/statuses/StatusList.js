import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import StatusCard from './StatusCard.js';
// import './Session.css';

class StatusList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: ["Dave", "Pricilla", "Yogi", "Samsonite"],
    };
  }

displayStatuses = () => {
    const statusList = this.state.students.map((student, i) => {
      return <StatusCard value={i} className="courseQuestion" student={student}/>
    });
    return statusList;
  }
    
  render () {
    return (
      <div>
        <CardGroup>
        {this.displayStatuses()}
        </CardGroup>
      </div>

    )};
}

export default StatusList;
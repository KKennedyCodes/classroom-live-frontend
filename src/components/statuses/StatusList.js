import React from 'react';
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
      return <StatusCard value={i} className="statusCard" student={student} key={i}/>
    });
    return statusList;
  }
    
  render () {
    return (
        <CardGroup>
        {this.displayStatuses()}
        </CardGroup>
    )};
}

export default StatusList;
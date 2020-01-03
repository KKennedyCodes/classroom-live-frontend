import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
// import Question from './Question.js';
// import './Session.css';

class StatusCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }    
  render () {
    return (
      <div>
      <Card border="light" style={{ width: '9rem' }}>
      {/* https://i.pravatar.cc/300 */}
      {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>{this.props.student}</Card.Title>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text> */}
        </Card.Body>
      </Card>
      </div>
    )};
}

export default StatusCard;
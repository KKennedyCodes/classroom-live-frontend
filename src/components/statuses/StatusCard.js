import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
// import Question from './Question.js';
// import './Session.css';
import axios from 'axios';

class StatusCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  statusVariant = (status) => {
      let colorVariant = "";
      if (status.code.color === "red") {
        colorVariant="danger";
      }
      else if (status.code.color === "yellow") {
        colorVariant='warning';
      }
      else if (status.code.color === "green") {
        colorVariant='success';
      }
      else if (status.code.color === "blue") {
        colorVariant = 'primary';
      }
      else {
        colorVariant = 'light';
      }
    return colorVariant;
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
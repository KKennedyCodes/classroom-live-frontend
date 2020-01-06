import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
// import './Course.css';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  render () {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.value}>
          <Moment format="DD/MM/YYYY">{this.props.date}</Moment> - {this.props.task} 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.value}>
          <Card.Body>
            <p>Objective: {this.props.taskObjective}</p>
            <Button variant="outline-secondary">Details ◢</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )};
}

export default Session;
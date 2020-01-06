import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
          {this.props.task} Click me! 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.value}>
          <Card.Body>
            <p>{this.props.taskObjective}</p>
            <Button variant="outline-secondary">Details ◢</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )};
}

export default Session;
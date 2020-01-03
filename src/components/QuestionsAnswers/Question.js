import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AnswerList from './AnswerList.js';
// import './Course.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  render () {
    console.log(this.props.key);
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.value}>
          {this.props.date} Question
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.value}>
          <Card.Body>
            <p><AnswerList /></p>
            {/* <Button variant="outline-secondary">Details ◢</Button> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )};
}

export default Question;
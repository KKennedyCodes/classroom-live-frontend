import React, { Component } from 'react';
import {Card, Button, Accordion} from 'react-bootstrap';
import AnswerList from './AnswerList.js';
// import './Course.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  render () {
    console.log(this.props.question);
    return (
    <Card>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.props.value}>
       {this.props.question}
      </Accordion.Toggle>
    <Accordion.Collapse eventKey={this.props.value}>
      <Card.Body><AnswerList /></Card.Body>
    </Accordion.Collapse>
  </Card>
    )};
}

export default Question;
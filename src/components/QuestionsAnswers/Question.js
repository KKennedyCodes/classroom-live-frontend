import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import AnswerList from './AnswerList.js';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ["Answer 1", "Answer 2", "Answer 3"],
    };
  }
    
  render () {
    return (
    <Card className = "QuestionCard">
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.props.value}>
       Q:  {this.props.question.question_text}
      </Accordion.Toggle>
    <Accordion.Collapse eventKey={this.props.value}>
      <Card.Body><AnswerList answers={this.props.answerSet} question={this.props.question.id} /></Card.Body>
    </Accordion.Collapse>
  </Card>
    )};
}

export default Question;
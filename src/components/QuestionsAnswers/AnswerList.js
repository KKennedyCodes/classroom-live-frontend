import React from 'react';
import { Accordion, Card, ListGroup }  from 'react-bootstrap/';
import Answer from './Answer.js';
import AnswerForm from '../input/AnswerForm.js';
// import './Session.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    // this.getQuestionList();
    this.displayAnswers();
  }

displayAnswers = () => {
  let answerList = undefined;
  if (this.props.answers.length > 0) {
    answerList = this.props.answers.map((answer, i) => {
      // return <li>{answer.answer_text}</li>
      return <Answer value={i} key={i} className="courseAnswer" answer_text={answer.answer_text}/>
    }); }
    else {
      answerList = "Not Yet Answered";
    }
    return answerList;
  }
  answerAccordion = () => {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle className="accordianHeader" as={Card.Header} eventKey="0">
            Answer Question ▼
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <AnswerForm header={false} id={this.props.id} question={this.props.question} session={this.props.session} post={this.props.post} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
    
  render () {
    return (
      <section>
        <ListGroup varaint="flush">
        {this.displayAnswers()}
        {this.answerAccordion()}
        </ListGroup>
      </section>

    )};
}

export default AnswerList;

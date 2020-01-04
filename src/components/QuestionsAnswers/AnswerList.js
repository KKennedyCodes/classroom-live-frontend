import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Answer from './Answer.js';
// import './Session.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ["Happy", "Birthday", "Daddy"]
    };
  }

displayAnswers = () => {
    const answerList = this.state.answers.map((answers, i) => {
      return <Answer value={i} className="courseAnswer" answer={answers}/>
    });
    return answerList;
  }
    
  render () {
    return (
      <section>
        <ListGroup varaint="flush">
        {this.displayAnswers()}
        </ListGroup>
      </section>

    )};
}

export default AnswerList;

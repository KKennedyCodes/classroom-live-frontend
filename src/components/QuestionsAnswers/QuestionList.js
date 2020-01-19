import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Question from './Question.js';
import axios from 'axios';
// import './Session.css';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount = () => {
    // this.getQuestionList();
    this.displayQuestions();
  }



displayQuestions = () => {
    const questionList = this.props.questions.map((question, i) => {
      return <Question key={i} value={i} className="courseQuestion" question={question} />
    });
  return questionList;
}
    
  render () {
    return (
      <section>
        <Accordion defaultActiveKey="0">
        {this.displayQuestions()}
        </Accordion>
      </section>

    )};
}

export default QuestionList;
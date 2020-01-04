import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Question from './Question.js';
// import './Session.css';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["Happy", "Birthday", "Daddy"]
    };
  }

displayQuestions = () => {
    const questionList = this.state.questions.map((question, i) => {
      return <Question value={i} className="courseQuestion" question={question}/>
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
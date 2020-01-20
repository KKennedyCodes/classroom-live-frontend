import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Question from './Question.js';
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
      let answerSet = this.props.answers.filter(answer => answer.question_id === question.id)
      return <Question key={i} value={i} className="courseQuestion" question={question} answerSet={answerSet} />
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
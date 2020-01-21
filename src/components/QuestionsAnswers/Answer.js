import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Answer.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <ListGroup.Item className="AnswerList">A:  {this.props.answer_text}</ListGroup.Item>
    )};
}

export default AnswerList;

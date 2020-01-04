import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import './Session.css';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <ListGroup.Item>{this.props.answer}</ListGroup.Item>

    )};
}

export default AnswerList;

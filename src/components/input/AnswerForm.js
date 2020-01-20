import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';
import './forms.css';
class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer_text: '',
      question_id: this.props.question,
      session_id: this.props.session,
    };
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
  }

  clearForm = () => {
    this.setState({
      answer_text: '',
    });
  }

  showHeading = () => {
    return (
      <section>
      <h4>Add Answer</h4>
      <hr color="red"/>
      </section>
    )
  }
  onSubmit = (data) =>{
    let link = "https://classroomlive-basic-api.herokuapp.com/answers";
    // let link= "http://localhost:3000/posts";
    data.preventDefault();
    data.target.reset();
    axios({
      method: 'post',
      url: link,
      data: {
        answer_text: this.state.answer_text,
        question_id: this.state.question_id,
        session_id: this.state.session_id
      }
    }).then((response) => {
      this.props.post();
    }, (error) =>{
      console.log(error);
    });
    }

  render() {
    return (
      <section>
      {this.props.header ? this.showHeading() : ""}
      <Form className="answerInput" onSubmit={this.onSubmit}>
        <Form.Group controlId="AnswerText" className="comment">
          <Form.Label>Answer:</Form.Label>
          <Form.Control as="textarea" id={this.props.id} name="answer_text" placeholer="Answer Text Here" rows="3" onChange={this.onChange}/>
        </Form.Group>
        <hr className="comment"/>
        <Button variant="outline-danger" type="submit">
          Submit Answer
        </Button>
      </Form>
      </section>
    )};
}

export default AnswerForm;

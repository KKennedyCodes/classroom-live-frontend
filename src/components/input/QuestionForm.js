import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';
import './forms.css';
class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_text: '',
      session_id: this.props.session || '',
    };
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
  }

  clearForm = () => {
    this.setState({
      question_text: '',
      session_id: '',
    });
  }

  showHeading = () => {
    return (
      <section>
      <h4>Add Question</h4>
      <hr color="red"/>
      </section>
    )
  }
  onSubmit = (data) =>{
    let link = "https://classroomlive-basic-api.herokuapp.com/questions";
    data.preventDefault();
    data.target.reset();
    axios({
      method: 'post',
      url: link,
      data: {
        question_text: this.state.question_text,
        session_id: this.state.session_id,
      }
    }).then((response) => {
      console.log(response);
      this.props.post();
      
    }, (error) =>{
      console.log(error);
    });
    }

  render() {
    return (
      <section>
      {this.props.header ? this.showHeading() : ""}
      <Form className="studentInput" onSubmit={this.onSubmit}>
        <Form.Group controlId="QuestionSessionId">
          <Form.Label>Session ID:</Form.Label>
          <Form.Control as="input" name="session_id" value={this.state.session_id} placeholer="Enter Session ID" onChange={this.onChange}/>
        </Form.Group>
        <Form.Group controlId="QuestionText" className="comment">
          <Form.Label>Question:</Form.Label>
          <Form.Control as="textarea" name="question_text" placeholer="Comment Text Here" rows="3" onChange={this.onChange}/>
        </Form.Group>
        <hr className="comment"/>
        <Button variant="outline-danger" type="submit">
          Add Question
        </Button>
      </Form>
      </section>
    )};
}

export default StatusForm;

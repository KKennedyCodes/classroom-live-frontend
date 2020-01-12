import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';
import './forms.css';
class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusStart: Date.now(),
      statusEnd: undefined,
      studentComment: '',
      teacherComment: '',
      userId: undefined,
      sessionId: undefined,
      codeId: 1,
      // publicToggle: "off",
      // public: false,
    };
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
    // if (this.state.publicToggle === 'on') {
    //   console.log("If statement reached");
    //   this.setState({
    //     public: true,
    //   });}
  }

  onSubmit = (data) =>{
    data.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/statuses',
      data: {
        status_start: undefined,
        status_end: undefined,
        student_comment: this.state.studentComment,
        teacher_comment: this.state.teacherComment,
        user_id: this.state.userId,
        session_id: this.props.sessionId,
        code_id: this.state.code_id
      }
    }).then((response) => {
      console.log(response);
    }, (error) =>{
      console.log(error);
    });
    }
    // axios.post('http://localhost:3000/statuses', {
    //   status_start: undefined,
    //   status_end: undefined,
    //   student_comment: this.state.studentComment,
    //   teacher_comment: this.state.teacherComment,
    //   user_id: this.state.userId,
    //   session_id: this.props.sessionId,
    //   code_id: this.state.code_id,
    // }).then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    // }

  render() {
    return (
      <Form className="studentInput" onSubmit={this.onSubmit}>
        <fieldset>
          <Form.Group>
            <Form.Label as="legend">
              Update Status:
            </Form.Label>
            <Form.Check
              type="radio"
              label="Stuck, Can't Make Progress"
              name="codeId"
              id="stuck"
              value="2"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Question, but Still Working"
              name="codeId"
              id="question"
              value="3"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Good, Working Fine"
              name="codeId"
              id="working"
              value="4"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Done, Task Completed"
              name="codeId"
              id="done"
              value="5"
              onChange={this.onChange}
            />
          </Form.Group>
        </fieldset>
          <Form.Group controlId="StatusUserId">
          <Form.Label>User ID:</Form.Label>
            <Form.Control as="input" name="userId" placeholer="User ID" onChange={this.onChange}/>
            </Form.Group>
            <Form.Group controlId="SessionId">
            <Form.Label>Session ID:</Form.Label>
            <Form.Control as="input" name="sessionId" placeholer="Session ID" onChange={this.onChange}/>
            </Form.Group>
            <Form.Group controlId="StatusComment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" name="studentComment" placeholer="Response Text Here" rows="3" onChange={this.onChange}/>
            </Form.Group>
          {/* <Form.Check 
            type="switch"
            label="Push to Public FAQ"
            id="disabled-custom-switch"
            onChange={this.onChange}
            name="publicToggle"
          /> */}
          <Button variant="light" type="submit">
            Submit
          </Button>

        </Form>
    )};
}

export default StatusForm;

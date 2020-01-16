import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';
import './forms.css';
class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: '',
      status: '',
      session_id: this.props.session || '',
    };
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
  }

  clearForm = () => {
    this.setState({
      username: '',
      comment: '',
      status: '',
      session_id: '',
    });
  }

  showHeading = () => {
    return (
      <section>
      <h4>Post Status</h4>
      <hr color="red"/>
      </section>
    )
  }
  onSubmit = (data) =>{
    let link = "https://classroomlive-basic-api.herokuapp.com/posts";
    // let link= "http://localhost:3000/posts";
    data.preventDefault();
    data.target.reset();
    axios({
      method: 'post',
      url: link,
      data: {
        username: this.state.username,
        comment: this.state.comment,
        status: this.state.status,
        session_id: this.state.session_id,
      }
    }).then((response) => {
      console.log(response);
      
    }, (error) =>{
      console.log(error);
    });
    }

  render() {
    return (
      <section>
      {this.props.header ? this.showHeading() : ""}
      <Form className="studentInput" onSubmit={this.onSubmit}>
        <Form.Group controlId="StatusUserId">
          <Form.Label>Username: </Form.Label>
          <Form.Control as="input" name="username" placeholer="Enter Username" onChange={this.onChange}/>
        </Form.Group>
        <fieldset className="RadioOptions">
          <Form.Group >
            <Form.Label as="legend">
              Status:
            </Form.Label>
            <Form.Check
              type="radio"
              label="Stuck, Can't Make Progress"
              name="status"
              id="stuck"
              value="stuck"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Question, but Still Working"
              name="status"
              id="question"
              value="question"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Good, Working Fine"
              name="status"
              id="working"
              value="working"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Done, Task Completed"
              name="status"
              id="done"
              value="done"
              onChange={this.onChange}
            />
          </Form.Group>
        </fieldset>
          
            <Form.Group controlId="SessionId">
            <Form.Label>Session ID:</Form.Label>
            <Form.Control as="input" name="session_id" value={this.state.session_id} placeholer="Enter Session ID" onChange={this.onChange}/>
            </Form.Group>
            <Form.Group controlId="StatusComment" className="comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control as="textarea" name="comment" placeholer="Comment Text Here" rows="3" onChange={this.onChange}/>
            </Form.Group>
            <hr className="comment"/>
          <Button variant="outline-danger" type="submit">
            Post Status
          </Button>

        </Form>
        </section>
    )};
}

export default StatusForm;

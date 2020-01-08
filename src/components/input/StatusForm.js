import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import axios from 'axios';
import './forms.css';
class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code_id: undefined,
      comment: '',
      publicToggle: "off",
      public: false,
      status: undefined,
    };
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
    if (this.state.publicToggle === 'on') {
      console.log("If statement reached");
      this.setState({
        public: true,
      });}
  }

  onSubmit = (data) =>{
    data.preventDefault();
    axios.post('http://localhost:3000/statuses', {
      code_id: this.state.code_id,
      comment: this.state.comment,
      public: this.state.public,
      status: this.state.status,
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    }

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
              name="status"
              id="stuck"
              value="red"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Question, but Still Working"
              name="status"
              id="question"
              value="yellow"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Good, Working Fine"
              name="status"
              id="working"
              value="green"
              onChange={this.onChange}
            />
            <Form.Check
              type="radio"
              label="Done, Task Completed"
              name="status"
              id="done"
              value="blue"
              onChange={this.onChange}
            />
          </Form.Group>
        </fieldset>
          <Form.Group controlId="TaskObjective">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" name="comment" placeholer="Response Text Here" rows="3" onChange={this.onChange}/>
          </Form.Group>
          <Form.Check 
            type="switch"
            label="Push to Public FAQ"
            id="disabled-custom-switch"
            onChange={this.onChange}
            name="publicToggle"
          />
          <Button variant="light" type="submit">
            Submit
          </Button>

        </Form>
    )};
}

export default StatusForm;

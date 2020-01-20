import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import faker from 'faker';

class NewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      section: '',
      code: '',
    };
  }

  generateClassCode = () => {
    this.setState({code: faker.random.alphaNumeric(8)});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.generateClassCode();
    event.preventDefault();
    // alert('A class was created: ' + this.state.title);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <h4>Create New Course</h4>
          <Form.Group controlId="title">
            <Form.Label>Course Title: </Form.Label>
            <Form.Control type="task" placeholder="Enter Course Title" />
          </Form.Group>
          <Form.Group controlId="section">
            <Form.Label>Course Section: </Form.Label>
            <Form.Control type="task" placeholder="Enter Course Section" />
            <Form.Text className="text-muted">
              Course Section is Optional
            </Form.Text>
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Add Course
          </Button>
        </Form>
    )};
}

export default NewCourse;


import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    return 
  }

  render() {
    return (
      <Form>
          <h4>Create New Course</h4>
          <Form.Group controlId="courseTitle">
            <Form.Label>Course Title: </Form.Label>
            <Form.Control type="task" placeholder="Enter Course Title" />
          </Form.Group>
          <Form.Group controlId="courseSection">
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

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  displayCourses = () => {
    console.log(this.props.userCourses)
    const courseList = (this.props.userCourses).map((course, i) => {
      console.log(course);
      return <option key={i}>{course.title}</option>
    })
    return courseList;
  }

  render() {
    return (
      <Form>
          <h4>Start Live Session</h4>
          <Form.Group controlId="selectCourse">
            <Form.Label>Choose Course</Form.Label>
            <Form.Control as="select">
              {this.displayCourses()}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="LiveForm">
            <Form.Label>Task:</Form.Label>
            <Form.Control type="task" placeholder="Enter Task" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="TaskObjective">
            <Form.Label>Task Objective:</Form.Label>
            <Form.Control as="textarea" placeholer="Enter Task Objective" rows="3" />
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Go Live
          </Button>
        </Form>
    )};
}

export default LiveForm;

{/* Time Pickers */}
    {/* <Form.Group controlId="startTime"> 
      <Form.Label>Start Time:</Form.Label>
      <TimePicker
        showSecond={false}
        defaultValue={now}
        className="xxx"
        onChange={onChange}
        format={format}
        use12Hours
        inputReadOnly />
    </Form.Group>
    <Form.Group controlId="endTime"> 
      <Form.Label>End Time:</Form.Label>
      <TimePicker
        showSecond={false}
        defaultValue={now}
        className="xxx"
        onChange={onChange}
        format={format}
        use12Hours
        inputReadOnly />
        <Form.Text className="text-muted">
        Live Sessions can be manually ended.
      </Form.Text>
    </Form.Group> */}

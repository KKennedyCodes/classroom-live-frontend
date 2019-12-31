import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import 'rc-time-picker/assets/index.css';
// // import ReactDom from 'react-dom';
// import moment from 'moment';
// import TimePicker from 'rc-time-picker';
// // { checked, label, handleClick }

// const format = 'h:mm a';
// const now = moment().hour(0).minute(0);

// function onChange(value) {
//   console.log(value && value.format(format));
// }

const LiveForm = () => (
  <Form>
    <h4>Start Live Session</h4>
    <Form.Group controlId="selectCourse">
      <Form.Label>Choose Course</Form.Label>
      <Form.Control as="select">
        <option>History 101 - P1</option>
        <option>History 101 - P2</option>
        <option>Intro to Gov't</option>
        <option>Civics</option>
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
);

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

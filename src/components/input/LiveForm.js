import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
class LiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      task_objective: '',
      session_start: Date.now(),
      session_end: undefined,
      status: "live",
      course_id: undefined,
    };
  }

  displayCourses = () => {
    const courseList = (this.props.userCourses).map((course, i) => {
      return <option key={i} value={course.id}>{course.id} {course.title}</option>
    })
    return courseList;
  }

  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
    // if (this.state.publicToggle === 'on') {
    //   console.log("If statement reached");
    //   this.setState({
    //     public: true,
    //   })

  }

  submitHandler = (data) =>{
    data.preventDefault();
    axios.post('http://localhost:3000/sessions', {
      task: this.state.task,
      task_objective: this.state.task_objective,
      session_start: this.state.user_id,
      session_end: undefined,
      status: this.state.status, 
      course_id: this.state.course,
    }).then((response) => {
      console.log(response);
      
    }, (error) => {
      console.log(error);
    });
    this.props.startLive();
    }


  render() {
    return (
      <Form onSubmit={this.submitHandler}>
          <h4>Start Live Session</h4>
          <Form.Group controlId="selectCourse">
            <Form.Label>Choose Course</Form.Label>
            <Form.Control as="select" name="course_id" onChange={this.onChange}>
              {this.displayCourses()}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="LiveForm">
            <Form.Label>Task:</Form.Label>
            <Form.Control type="task" name="task" placeholder="Enter Task" onChange={this.onChange}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="TaskObjective">
            <Form.Label>Task Objective:</Form.Label>
            <Form.Control as="textarea" name="task_objective" placeholer="Enter Task Objective" rows="3" onChange={this.onChange}/>
          </Form.Group>
          <Button variant="outline-danger" type="submit" >
            Start Live Session
          </Button>
        </Form>
    )};
}

export default LiveForm;

// // Time Pickers 
//     <Form.Group controlId="startTime"> 
//       <Form.Label>Start Time:</Form.Label>
//       <TimePicker
//         showSecond={false}
//         defaultValue={now}
//         className="xxx"
//         onChange={onChange}
//         format={format}
//         use12Hours
//         inputReadOnly />
//     </Form.Group>
//     <Form.Group controlId="endTime"> 
//       <Form.Label>End Time:</Form.Label>
//       <TimePicker
//         showSecond={false}
//         defaultValue={now}
//         className="xxx"
//         onChange={onChange}
//         format={format}
//         use12Hours
//         inputReadOnly />
//         <Form.Text className="text-muted">
//         Live Sessions can be manually ended.
//       </Form.Text>
//     </Form.Group>

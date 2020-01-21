import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";
import axios from 'axios'
import './forms.css';
class LiveForm extends React.Component {
  constructor(props) {
    let d = new Date();
    let n = d.toString();
    super(props);
    this.state = {
      task: '',
      objective: '',
      date: n,
    };
  }


  onChange = (data) => {
    this.setState({ [data.target.name]: data.target.value });
  }

  submitHandler = (data) =>{
    let link = "https://classroomlive-basic-api.herokuapp.com/sessions";
    data.preventDefault();
    data.target.reset();
    axios({
      method: 'post',
      url: link,
      data: {
        task: this.state.task,
        objective: this.state.objective,
        date: this.state.date,
      }
    }).then((response) => {
      console.log(response.data);
      // this.props.history.push(`/sessions/${id}`);    
      this.props.history.push(`/sessions/`)
    }, (error) =>{
      console.log(error);
    });
    }


  render() {
    return (
      <section className="FormArea">
        <h4>Create New Session</h4> 
        <hr color="red"/>
        <Form onSubmit={this.submitHandler} className="largeInput">
          
          <Form.Group controlId="LiveForm">
            <Form.Label>Task: </Form.Label><br />
            <Form.Control type="task" className="largeInput" name="task" placeholder="Enter Task" onChange={this.onChange}/>
          </Form.Group>
          <Form.Group controlId="TaskObjective">
            <Form.Label>Task Objective:</Form.Label><br />
            <Form.Control as="textarea" className="largeInput" name="objective" placeholder="Enter Task Objective" rows="3" onChange={this.onChange}/>
          </Form.Group>
          <Button variant="outline-danger" type="submit" className="submitButton">
            Create Session
          </Button>
        </Form>
        </section>
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

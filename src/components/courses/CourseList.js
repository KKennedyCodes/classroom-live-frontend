import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Course.css';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Katie",
      course: 1,
      courses: ["History 101 - P1", "History 101 - P2", "Intro to Gov't", "Civics"],
    };
  }

  displayCourses = () => {
    const courseList = this.state.courses.map((course, i) => {
      return <Button variant="light">{course}</Button>
    })

    return courseList;
  }
    
  render () {
    return (
      <nav className="nav">
        <h3>Course List</h3>
        <ButtonToolbar className="ButtonGroup">
          {this.displayCourses()}   
          <Button variant="outline-secondary">Add a Course</Button>       
        </ButtonToolbar>
      </nav>
    )};
}

export default CourseList;
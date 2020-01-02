import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Course.css';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      selected_course: '',
    };
  }

  getCourses () {
    
  }

  componentDidMount () {
    this.getCourses()
  }

  selectedCourse = (course) => {
    this.setState({
      selectedCourse: course,
    });
  }

  clearSelection = () => {
    this.setState({
      selectedCourse: undefined,
    })
  }

  displayCourses = () => {
    const courseList = this.state.courses.map((course, i) => {
      return <Button variant="light" className="courseButton">{course}</Button>
    })

    return courseList;
  }
    
  render () {
    return (
      <nav className="nav">
        <ButtonToolbar className="ButtonGroup">
          {this.displayCourses()}   
          <Button variant="outline-secondary" >Add a Course</Button>       
        </ButtonToolbar>
      </nav>
    )};
}

export default CourseList;
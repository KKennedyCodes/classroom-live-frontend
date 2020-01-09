import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import axios from 'axios';
import { NavLink} from "react-router-dom";
import './Course.css';

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    this.displayCourses();
  }

  displayCourses = () => {
    
    const courseList = this.props.courses.map((course, i) => {
        let link="/courses/"+course.id;
        return <NavLink to={link} key={i}><Button variant="light" className="courseButton" key={i} onClick={() => this.props.selectCourse(course)}>{course.title}</Button></NavLink>
    });
    return courseList;
  }
    
  render () {
    
    return (
      <nav className="nav">
        <ButtonToolbar className="ButtonGroup">
          {this.displayCourses()}   
          <NavLink to="/courses/new"><Button variant="outline-secondary" className="courseButton">Add a Course</Button></NavLink>       
        </ButtonToolbar>
      </nav>
    )};
}

export default CourseList;
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
      allCourses: [],
      userCourses: [],
      selected_course: undefined,
      error: undefined,
    };
  }

 
  filterCourses () {
    this.setState({
    userCourses: this.state.allCourses.filter(course => course.user_id === this.props.user)
  });
  this.props.setCourses(this.state.userCourses);
  this.displayCourses();
};


  getCourses () {
    axios.get('http://localhost:3000/courses')
    .then((response) => {
      this.setState({
        allCourses: response.data,
      });
      this.filterCourses();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  componentDidMount () {
    this.getCourses();
  }

  selectedCourse = (course) => {
    this.setState({
      selected_course: course,
    });
  }

  clearSelection = () => {
    console.log(this.state.selected_course);
    this.setState({
      selected_course: undefined,
    })
  }

  displayCourses = () => {
    
    const courseList = this.state.userCourses.map((course, i) => {
        let link="/courses/"+course.id;
        return <NavLink to={link} key={i}><Button variant="light" className="courseButton" key={i} onClick={() => this.props.selectCourse({course})}>{course.title}</Button></NavLink>
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
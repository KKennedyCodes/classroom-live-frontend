import React from 'react';
import CourseList from './courses/CourseList.js';
import Course from './courses/Course.js';
import LiveForm from './input/LiveForm.js';
import NewCourseForm from './input/NewCourseForm.js';
import SessionDetails from './sessions/SessionDetails.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch} from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_selected: false,
      course: undefined,
      courses: []
    };
  }
  
  selectCourse = (course) => {
    this.setState({
      course_selected: true,
      course: course,
    })
  }

  userCourses = (courseData) => {
    this.setState({
      courses: courseData,
    })
  }


  render () {
    return (
      
        <section className="DashboardContainer">
          <menu><CourseList selectCourse={this.selectCourse} setCourses={this.userCourses} user={this.props.user}/></menu>
          <main>
          {/* {this.state.course_selected ? <Course course={this.state.course}/> : ''} */}
          <Switch>
            <Route path="/dashboard">
              <p>Welcome to Classroom Live, Select a Course to View</p>
            </Route>
            <Route path="/sessions/new">
              <LiveForm userCourses={this.state.courses} user={this.props.user} startLive={this.props.startLive}/>
            </Route>
            <Route exact path="/courses/new">
              <NewCourseForm />
            </Route> 
            <Route exact path="/courses/:id">
              <Course course={this.state.course} />
            </Route>
            <Route exact path="/sessions/:id" children={<SessionDetails />} />
          </Switch>
          </main>
        </section>

    )
  }
}

export default Dashboard;

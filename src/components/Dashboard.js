import React from 'react';
import CourseList from './courses/CourseList.js';
import Course from './courses/Course.js';
import LiveForm from './input/LiveForm.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
// import Search from "./Search";
// import Rental from "./Rental";
// import RentalsList from "./RentalsList";
// import RentalLibrary from "./RentalLibrary";
// import CustomerList from "./CustomerList";

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
          <menu><CourseList selectCourse={this.selectCourse} setCourses={this.userCourses}/></menu>
          <main>
          {/* {this.state.course_selected ? <Course course={this.state.course}/> : ''} */}
          <Switch>
            <Route path="/startlive">
              <LiveForm userCourses={this.state.courses} />
            </Route>
            <Route path="/courses/:id" component={Course}/>
          </Switch>
          </main>
        </section>

    )
  }
}

export default Dashboard;

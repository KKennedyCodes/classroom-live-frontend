import React from 'react';
import CourseList from './courses/CourseList.js';
import Course from './courses/Course.js';
import LiveForm from './input/LiveForm.js';
import NewCourseForm from './input/NewCourseForm.js';
import SessionList from './sessions/SessionList.js';
import SessionDetails from './sessions/SessionDetails.js';
import LiveTeacher from './live/LiveTeacherView.js';
// import LiveStudent from './components/live/LiveStudentView.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch} from "react-router-dom";
import axios from 'axios'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      courses: [],
      courseSelected: false,
      course: undefined,
      sessionsLoaded: false,
      sessionCount: undefined,
      sessions: [],
      sessionSelected: false,
      session: undefined,
      live: false,
      liveSession: undefined,
      alertShow: false,
      alertText: '',
      alertVariant: '',
      error: '',
    };
  }

  getUserDetails = () => {
    let link = "http://localhost:3000/users/" + this.props.user;
    axios.get(link)
    .then((response) => {
      this.setState({
        user: response.data,
      });
      this.filterCourses();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
  
  filterCourses = () => {
    axios.get("http://localhost:3000/courses/")
    .then((response) =>{
      this.setState ({
        courses: (response.data).filter(course => course.user_id === this.props.user),
      })
    })
    .catch((error) => {
      this.setState({error: error.message });
    })
  }

  selectCourse = (course) => {
    this.setState({
      courseSelected: true,
      course: course,
    });
    this.filterSessions(course);
  }

  selectSession = (session) => {
    this.setState({
      sessionSelected: true,
      session: session,
    });
  }

  filterSessions = (course) => {
    axios.get("http://localhost:3000/sessions/")
    .then((response) =>{
      this.setState ({
        sessions: (response.data).filter(session => session.course_id === course.id),
      });
      this.setState ({
        sessionsLoaded: true,
      });
    })
    .catch((error) => {
      this.setState({error: error.message });
    })
    // console.log(this.state.sessions);
  }

  startLive = () => {
    axios.get("http://localhost:3000/sessions/")
    .then((response) =>{
      this.setState ({
        live: true,
        liveSession: (response.data[response.data.length-1]),
      });
    })
    .catch((error) => {
      this.setState({error: error.message });
    })
  }

  endLive = () => {
    this.setState({
      live: false,
    });
  }

  showAlert = () => {
    this.setState({
      alertShow: true,
    });
  }

  hideAlert = () => {
    this.setState({
      alertShow: false,
    });
  }

  notlive = () => {
    return (
      <Switch>
            <Route path="/dashboard">
              <p>Welcome to Classroom Live, Select a Course to View</p>
            </Route>
            <Route path="/sessions/new">
              <LiveForm userCourses={this.state.courses} user={this.props.user} startLive={this.startLive}/>
            </Route>
            <Route exact path="/courses/new">
              <NewCourseForm />
            </Route> 
            <Route exact path="/courses/:id">
              <Course course={this.state.course}  />
              {this.state.sessionsLoaded ? <SessionList   sessions={this.state.sessions}/> : "No Session to Display"}
            </Route>
            <Route exact path="/sessions/:id">
              <SessionDetails session={this.state.session} />
            </Route>
          </Switch>
    )
  }

  live = () => {
    return <LiveTeacher endLive={this.endLive} />
    // return <LiveStudent />
    // return <Route exact path="session/:id/live" children={<LiveTeacher />} />
  }

  componentDidMount () {
    this.getUserDetails();
  }

  render () {
    return (
      
        <section className="DashboardContainer">
          <menu><CourseList selectCourse={this.selectCourse} courses={this.state.courses}/></menu>
          <main>
          {this.state.live ? this.live() : this.notlive()}
          </main>
        </section>

    )
  }
}

export default Dashboard;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Session from './Session.js';
import axios from 'axios';
import './Session.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: []
    };
  }

  getSessions () {
    axios.get('http://localhost:3000/sessions')
    .then((response) => {
      this.setState({
        sessions: response.data,
        // sessions: (response.data).filter(session => session.course.id.includes(this.props.course))
      });
      this.displaySessions();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  componentDidMount () {
    this.getSessions();
  }

  // displaySessions = () => {
    
  //     const sessionList = this.state.sessions.map((created_at, task, task_objective, course, i) => {
  //       return <Session date={created_at} task={task} task_objective={task_objective} key={i}/>
  //     });

  //     return sessionList;
  //   }

  displaySessions = () => {
    const sessionList = this.state.sessions.map((session, i) => {
        // let link="/sessions/"+session.id;
        // return <NavLink to={link} key={i}><Button variant="light" className="courseButton" key={i} onClick={() => this.props.selectCourse({course})}>{course.title}</Button></NavLink>
        return <Session date={session.created_at} task={session.task} taskObjective={session.task_objective} value={i} key={i}/>
      });
    return sessionList;
  }
    
  render () {
    return (
      <section>
        <Accordion defaultActiveKey="0">
        {this.displaySessions()}
        </Accordion>
      </section>
    )};
}

export default Course;
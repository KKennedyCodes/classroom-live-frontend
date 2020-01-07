import React from 'react';
import { useParams} from "react-router-dom";
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import './Course.css';

function Child () {
  let { id } = useParams();
  return (
      <section className="body">
        <h4>Session Show </h4>
        <h3>ID: {id}</h3>
        {/* <section className="CourseDetails">
            <h4>{this.props.course.course.title}</h4>
            <p>Instructor: {this.props.course.course.user_id}</p>
            <p>Section: {this.props.course.course.section} <br />Code: {this.props.course.course.code}</p>
          <section className="courseSpecs">
            {/* <p>{this.state.students.length} Students    •   {this.state.sessionIds.length} Logs   •   Avg. Wait Time</p> */}
          {/* </section>
        </section>
        <section>
          <p className="subTitle">Classroom Live Log:</p>
          {/* <SessionList course={this.props.course.id} /> */}
          {/* <SessionList course={this.props.course.course.id} />
        </section> */}
      </section>
      );
}

export default Child;
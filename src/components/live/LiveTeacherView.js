import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Stopwatch from "./Stopwatch";

class LiveStudentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    
  render () {
    return (
      <section className='liveContainer'>
        <div className='liveHeader'>History 101 - Live Session Timer End <Stopwatch /></div>
        <div className='liveDetails'>Task - Task Objective</div>
        <div className='liveContent'>Q&A
        </div>
        <div className='queue'>Student Queue</div>
        <div className='selected'>Selected Student</div>
        <div className='teachInfo'>Teacher Info</div>
      </section>
    )};
}

export default LiveStudentView;
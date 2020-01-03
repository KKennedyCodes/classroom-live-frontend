import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuestionList from '../QuestionsAnswers/QuestionList.js';
import Stopwatch from "./Stopwatch";

class LiveStudentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  liveToolbar = () => {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="status" title="Status">
          <p>Status</p>
        </Tab>
        <Tab eventKey="questions" title="Questions">
          <section><QuestionList /></section>
        </Tab>
      </Tabs>
    )
  }
    
  render () {
    return (
      <section className='liveContainer'>
        <div className='liveHeader'>History 101 - Live Session Timer End <Stopwatch /></div>
        <div className='liveDetails'>Task - Task Objective</div>
        <div className='liveContent'>{this.liveToolbar()}</div>
        <div className='selected'>Selected Student</div>
        <div className='teachInfo'>Teacher Info</div>
        <div className='studentQueue'>Student Queue</div>
      </section>
    )};
}

export default LiveStudentView;
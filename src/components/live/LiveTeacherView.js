import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuestionList from '../QuestionsAnswers/QuestionList.js';
import StatusList from '../statuses/StatusList.js';
import StatusKey from '../statuses/StatusKey.js';
import Stopwatch from "./Stopwatch";
import axios from 'axios';
class LiveStudentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [],
      error: '',
    };
  }

  liveToolbar = () => {
    return (
      <Tabs defaultActiveKey="status" id="uncontrolled-tab-example">
        <Tab eventKey="status" title="Status">
          <p><StatusList codes={this.state.codes}/></p>
        </Tab>
        <Tab eventKey="questions" title="Questions">
          <section><QuestionList /></section>
        </Tab>
      </Tabs>
    )
  }

  getCodes () {
    axios.get('http://localhost:3000/codes')
    .then((response) => {
      this.setState({
        codes: response.data,
      });      
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  // getStatuses () {
  //   axios.get('http://localhost:3000/codes')
  //   .then((response) => {
  //     this.setState({
  //       codes: response.data,
  //     });      
  //   })
  //   .catch((error) => {
  //     this.setState({ error: error.message });
  //   });
  // }

  componentDidMount () {
    this.getCodes();
  }
    
  render () {
    return (
      <section className='liveContainer'>
        <section className='liveHeader'>History 101 - Live Session Timer End <Stopwatch /></section>
        <section className='liveDetails'>Task - Task Objective</section>
        <section className='statusKey'><StatusKey codes={this.state.codes} /></section>
        <section className='liveContent'>{this.liveToolbar()}</section>
        <section className='selected'>Selected Student</section>
        <section className='teachInfo'>Teacher Info</section>
        <section className='studentQueue'>Student Queue</section>
      </section>
    )};
}

export default LiveStudentView;
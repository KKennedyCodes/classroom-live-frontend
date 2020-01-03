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
    console.log(this.state.codes);
    return (
      <section className='liveContainer'>
        <div className='liveHeader'>History 101 - Live Session Timer End <Stopwatch /></div>
        <div className='liveDetails'>Task - Task Objective</div>
        <div className='statusKey'><StatusKey codes={this.state.codes} /></div>
        <div className='liveContent'>{this.liveToolbar()}</div>
        <div className='selected'>Selected Student</div>
        <div className='teachInfo'>Teacher Info</div>
        <div className='studentQueue'>Student Queue</div>
      </section>
    )};
}

export default LiveStudentView;
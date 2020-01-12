import React from 'react';
import { NavLink, Route, Switch} from "react-router-dom";
import { Tab, Tabs, Button } from 'react-bootstrap';
import axios from 'axios';
import StatusForm from './input/StatusForm.js'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component {
  render () {
  return (
    <section className="HomeContainer">

            <img src="https://live.staticflickr.com/65535/49296000551_fe05df3618_b.jpg" className="homeTitle" alt="ClassroomLogo" /><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
            <p>A Classroom Management Tools for Teachers Who Want to Facilitate Effecting Work Time and Digitally Track Student Need</p>
    
      
    </section>
  );
}
}



export default Home;



// class LiveStudentView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       codes: [],
//       error: '',
//     };
//   }

//   liveToolbar = () => {
//     return (
//       <Tabs defaultActiveKey="status" id="uncontrolled-tab-example">
//         <Tab eventKey="status" title="Status">
//           <p><StatusList codes={this.state.codes}/></p>
//         </Tab>
//         <Tab eventKey="questions" title="Questions">
//           <section><QuestionList /></section>
//         </Tab>
//       </Tabs>
//     )
//   }

//   getCodes () {
//     axios.get('http://localhost:3000/codes')
//     .then((response) => {
//       this.setState({
//         codes: response.data,
//       });      
//     })
//     .catch((error) => {
//       this.setState({ error: error.message });
//     });
//   }

//   endLiveSession = () => {
//     // end timer, set session live to false
//     this.props.endLive();
//   }

//   componentDidMount () {
//     this.getCodes();
//   }
    
//   render () {
//     return (
//       <section className='liveContainer'>
//         <section className='liveHeader'>History 101 - Live Session Timer End <Stopwatch /></section>
//         <section className='liveDetails'>Task - Task Objective</section>
//         <section className="endLive"><Button variant="outline-danger" onClick={this.endLiveSession}>End Live Session</Button></section>
//         <section className='statusKey'><StatusKey codes={this.state.codes} /></section>
//         <section className='liveContent'>{this.liveToolbar()}</section>
//         <section className='selected'>Selected Student</section>
//         <section className='teachInfo'>Teacher Info</section>
//         <section className='studentQueue'>Student Queue</section>
//       </section>
//     )};
// }

// export default LiveStudentView;
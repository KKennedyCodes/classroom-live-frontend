import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home.js';
import { NavLink, Route } from "react-router-dom";
import StatusForm from './components/input/StatusForm.js'
import SessionList from './components/sessions/SessionList.js'
import SessionDetails from './components/sessions/SessionDetails.js'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: true,
      endpoint: "http://127.0.0.1:4001",
      sessionSelected: false,
      session: [],
      link: '',
    };
  }
  selectSession = (session) => {
    console.log("select session reached");
    console.log(session);
    this.setState({
      sessionSelected: true,
      session: session,
      link: "/sessions/" +  session.id
    });
  }
  componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    // const { response } = this.state;
    return (
        // <div style={{ textAlign: "center" }}>
        //   {response
        //       ? <p>
        //         The temperature in Florence is: {response} °F
        //       </p>
        //       : <p>Loading...</p>}
        // <Router>
        //   <section className="App">
        //     {/* {this.welcome()} */}
        //     <Home />
        //   </section>
        // </Router>
        // </div>
        <Router>
        <section className="HomeContainer">
        <ul className="header">
          <li><NavLink to="/home">Welcome</NavLink></li>
          <li><NavLink to="/status/new">Post Status</NavLink></li>
          <li><NavLink to="/sessions">Session List</NavLink></li>
          {this.state.sessionSelected ? <li><NavLink to={this.state.link}>Session Details</NavLink></li> : ""}
        </ul>
        <div className="content">
          <Route path="/home" component={Home}/>
          <Route path="/status/new" component={StatusForm}/>
          <Route exact path="/sessions">
          <SessionList selectSession={this.selectSession} />
          </Route> 
          <Route exact path="/sessions/:id">
            <SessionDetails session={this.state.session} />
            </Route>
        </div>
      </section>
      </Router>
    );
  }
}
export default App;

// import React from 'react';
// import socketIOClient from "socket.io-client";
// import NavBar from './components/nav_tools/NavBar.js';
// import Home from './components/Home.js';
// import Dashboard from './components/Dashboard.js';
// // import Moment from 'react-moment';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router} from "react-router-dom";
// // src/components/nav_tools/NavBar.js
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loggedIn: false,
//       teacher: false,
//       userId: 1,
//       alertText: '',
//       alertVariant: '',
//       response: false,
//       endpoint: "http://127.0.0.1:4001"
//       }
//     }

//     componentDidMount() {
//       const { endpoint } = this.state.endpoint;
//       const socket = socketIOClient(endpoint);
//       socket.on("FromAPI", data => this.setState({ response: data }));
//       console.log(this.state.response);
//     }

//   login = () => {
//     this.setState({
//       loggedIn: true,
//       userId: 1,      
//       alertText: 'Successfully Signed In',
//       alertVariant: 'success',
//     });
//     // this.showAlert();
//   }

//   logout = () => {
//     this.setState({
//       loggedIn: false,
//       userId: undefined,
//       alertText: 'Successfully Signed Out',
//       alertVariant: 'warning',
//     })
//   }

//   welcome = () => {
//     const { response } = this.state.response;
//     return (
//     <section className="AppContainer">
//       {response
//               ? <p>
//                 Socket IO Response: {response} °F
//               </p>
//               : <p>No Data Received</p>}
//             <header>
//               <NavBar loggedIn={this.state.loggedIn} login={this.login} logout={this.logout} />
//             </header>
//             <section>
//               {this.state.loggedIn ? <Dashboard user={this.state.userId} /> : <Home />}
//             </section>
//             <footer>
//                   <p>Classroom Live - Created By Katie Kennedy, Ada Developers Academy - Cohort 12</p>
//             </footer>
//             </section>
//     )
//   }

// render () {

//   return (
//   <Router>
//         <section className="App">
//           {this.welcome()}
//         </section>
//   </Router>

//   );
// }};

// export default App;

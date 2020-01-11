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


import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
        <Router>
          <section className="App">
            {/* {this.welcome()} */}
            <Home />
          </section>
        </Router>
        </div>
    );
  }
}
export default App;
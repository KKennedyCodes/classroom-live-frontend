import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home.js';
import { NavLink, Route } from "react-router-dom";
import LiveForm from './components/input/LiveForm.js'
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
    this.setState({
      sessionSelected: true,
      session: session,
      link: "/sessions/" +  session.id
    });
  }
  componentDidMount() {
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
          <li><NavLink to="/session/new">Create Session</NavLink></li>
          <li><NavLink to="/sessions">Session List</NavLink></li>
          {this.state.sessionSelected ? <li><NavLink to={this.state.link}>Session Details</NavLink></li> : ""}
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/session/new" component={LiveForm}/>
          <Route exact path="/sessions">
          <SessionList selectSession={this.selectSession} />
          </Route> 
          <Route path="/sessions/:id" component={SessionDetails} />
          {/* <Route path="/sessions/:id">
            <SessionDetails session={this.state.session} />
            </Route> */}
        </div>
      </section>
      </Router>
    );
  }
}
export default App;

import React from 'react';
import StatusForm from '../input/StatusForm';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Card, Accordion } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import axios from 'axios'
import './Session.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class SessionDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: [],
      sessionId: Number(this.props.match.params.id),
      session: undefined,
      showPopup: false,
      response: true,
      endpoint: "http://127.0.0.1:4001", 
    };
  }

  componentDidMount = () => {
    this.getSessionDetails();
    // this.startSocket();
  }

  // startSocket = () => {
  //   const { endpoint } = this.state.endpoint;
  //   // const socket = socketIOClient(endpoint);
  //   var socket = socketIOClient.connect('http://localhost:3000/');
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // }
  getSessionDetails = () => {
    let sessionsLink = "https://classroomlive-basic-api.herokuapp.com/sessions"
    axios.get(sessionsLink)
    .then((response) => {
      console.log(this.state.sessionId);
      console.log(response.data);
      this.setState({
        session: (response.data).filter(session => session.id === this.state.sessionId),
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
    this.showSessionDetails();
  }

  showSessionDetails = () => {
    console.log(this.state.session);
    this.getStatusList();
    return (
      <section>
        {/* <h3>{this.state.session.task}</h3>
        <p>Objective: {this.state.session.objective}</p>
        <p>Date: {this.state.session.date}</p>
        <p>Session ID: {this.state.session.id}</p> */}
      </section>
    )
    
  }
  getStatusList = () => {
    let postLink = "https://classroomlive-basic-api.herokuapp.com/posts";
    // let link = "http://localhost:3000/posts";
    axios.get(postLink)
    .then((response) => {
      this.setState({
        posts: (response.data).filter(post => post.session_id === this.state.sessionId),
      });
      this.tableSetup();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
  statusAccordion = () => {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Post Status
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <StatusForm header={false} session={this.state.sessionId} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  submit = () => {
    confirmAlert({
      title: 'Delete Post?',
      message: 'This action cannot be undone.',
      buttons: [
        {
          label: 'Delete',
          onClick: () => this.deletePost()
        },
        {
          label: 'Cancel',
          onClick: () => this.setState({selectedSession: undefined, showPopup: false})
        }
      ]
    });
  };

  deletePost = () => {
    let link = "https://classroomlive-basic-api.herokuapp.com/posts/" + this.state.selectedSession.id;
    axios.delete(link)
    .then((response) => {
      this.setState({
        selectedSession: undefined,
        showPopup: false,
      });
      console.log("Post Deleted");
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error.message);

    });
  }

  // cellColor = (row, index) => {
  //   let classes = "grey";
  //   if (row.status === "done") {
  //     classes = "blue";
  //   } else if (row.status === "working") {
  //     classes = "green";
  //   } else if (row.status === "stuck") {
  //     classes = "red";
  //   } else if (row.status === "question") {
  //     classes = "yellow";
  //   }
  //   return {color: classes};
  // }

  tableSetup = () => {
    const selectRow = {
      mode: 'radio', // single row selection
      style: { background: 'red' },
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        this.setState({
          selectedSession: row,
          showPopup: true,
        });
        this.submit();
      }
    };    
    const columns = [{
      dataField: 'id',
      text: 'Status ID',
      sort: true
    }, {
      dataField: 'username',
      text: 'Username',
      sort: true
    }, {
      dataField: 'comment',
      text: 'Comment',
      sort: true
    }, {
      dataField: 'created_at',
      text: 'Date',
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${('0' + dateObj.getUTCDate()).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
      sort: true
    }, {
      dataField: 'status',
      text: 'Status',
      sort: true
    }];
    return (
      <ToolkitProvider
      keyField="id"
      data={ this.state.posts }
      columns={ columns }
      >
        
  {
    props =>
      <BootstrapTable selectRow={ selectRow } { ...props.baseProps } />
  }
</ToolkitProvider>)
  }

render () {
  return (
      <section className="body">
        {this.showSessionDetails()}
        {this.statusAccordion()}
        {/* {response
              ? <p>
                The socket response is: {response}
              </p>
              : <p>Loading Socket Response...</p>} */}
        {this.tableSetup()}
        {/* <StatusForm sessionId={this.props.session.id}/> */}
        
      </section>
      );
}
}
export default SessionDetails;


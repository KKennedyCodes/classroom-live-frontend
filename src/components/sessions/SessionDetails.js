import React from 'react';
import StatusForm from '../input/StatusForm';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Card, Accordion, Nav, Button } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import axios from 'axios'
import './Session.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class SessionDetails extends React.Component {
    constructor(props) {
      // this.response = true;

    super(props);
    this.state = {
      posts: [],
      selectedSessions: [],
      showPopup: false,
      response: true,
      endpoint: "http://127.0.0.1:4001", 
    };
  }

  componentDidMount = () => {
    this.getStatusList();
    // this.startSocket();
  }

  // startSocket = () => {
  //   const { endpoint } = this.state.endpoint;
  //   // const socket = socketIOClient(endpoint);
  //   var socket = socketIOClient.connect('http://localhost:3000/');
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // }

  getStatusList = () => {
    let link = "https://classroomlive-basic-api.herokuapp.com/posts";
    // let link = "http://localhost:3000/posts";
    axios.get(link)
    .then((response) => {
      this.setState({
        posts: (response.data).filter(post => post.session_id === this.props.session.id)
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
              <StatusForm header={false} session={this.props.session.id} />
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
  const { response } = this.state;
  // console.log(this.props);
  console.log(this.state.response);
  // console.log(response);
  return (
      <section className="body">
        <h3>{this.props.session.task}</h3>
        <p>Objective: {this.props.session.task_objective}</p>
        <p>Date: {this.props.session.created_at}</p>
        <p>Course ID: {this.props.session.course_id}</p>
        <p>Session ID: {this.props.session.id}</p>
        {this.statusAccordion()}
        {response
              ? <p>
                The socket response is: {response}
              </p>
              : <p>Loading Socket Response...</p>}
        {this.tableSetup()}
        {/* <StatusForm sessionId={this.props.session.id}/> */}
        
      </section>
      );
}
}
export default SessionDetails;


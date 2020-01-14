import React from 'react';
import StatusForm from '../input/StatusForm';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import socketIOClient from "socket.io-client";
import axios from 'axios'
import './Session.css';
class SessionDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: [],
      response: true,
      endpoint: "http://127.0.0.1:4001",
    };
  }

  componentDidMount = () => {
    this.getStatusList();
    this.startSocket();
  }

  startSocket = () => {
    const { endpoint } = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

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

  tableSetup = () => {
    // const pagination = paginationFactory({
    //   page: 2,
    // });
    // const selectRow = {
    //   mode: 'radio', // single row selection
    //   style: { background: 'red' },
    //   clickToSelect: true,
    //   onSelect: (row, isSelect, rowIndex, e) => {
    //     this.props.selectSession(row);
    //     // this.redirect(row.id);
    //   }
    // };
    
    const columns = [{
      dataField: 'session_id',
      text: 'Session ID',
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
      // return { backgroundColor: colorDict[cell] };
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
      <BootstrapTable { ...props.baseProps } />
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
        <StatusForm session={this.props.session.id} />
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


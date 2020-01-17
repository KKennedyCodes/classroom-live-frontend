import React from 'react';
import StatusForm from '../input/StatusForm';
import QuestionForm from '../input/QuestionForm';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Card, Accordion } from 'react-bootstrap';
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
      postCreated: 0, 
    };
  }

  postMade = () => {
    let number = this.state.postCreated + 1;
    this.setState({
      postCreated: number,
    });
  }
  
  componentDidMount = () => {
    this.getSessionDetails();
  }

  getSessionDetails = () => {
    let sessionsLink = "https://classroomlive-basic-api.herokuapp.com/sessions"
    axios.get(sessionsLink)
    .then((response) => {
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
    if (this.state.session) {
      return (
      <section>
        <h3>{this.state.session[0].task}</h3>
        <p>Objective: {this.state.session[0].objective}</p>
        <p>Date: {this.state.session[0].date}</p>
        <p>Session ID: {this.state.session[0].id}</p>
      </section> )
    }
    this.getStatusList();
  }
  getStatusList = () => {
    let postLink = "https://classroomlive-basic-api.herokuapp.com/posts";
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
    // this.getQuestionList();
  }
  getQuestionList = () => {
    let questionLink = "https://classroomlive-basic-api.herokuapp.com/questions";
    axios.get(questionLink)
    .then((response) => {
      this.setState({
        posts: (response.data).filter(question => question.session_id === this.state.sessionId),
      });
      // this.tableSetup();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
  statusAccordion = () => {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle className="accordianHeader" as={Card.Header} eventKey="0">
            Post Status ▼
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <StatusForm header={false} session={this.state.sessionId} post={this.postMade} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle className="accordianHeader" as={Card.Header} eventKey="1">
            Post Question ▼
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <QuestionForm header={false} session={this.state.sessionId} post={this.postMade} />
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
      text: 'Status ID ↕',
      sort: true
    }, {
      dataField: 'username',
      text: 'Username ↕',
      sort: true
    }, {
      dataField: 'comment',
      text: 'Comment ↕',
      sort: true
    }, {
      dataField: 'created_at',
      text: 'Date ↕',
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
      text: 'Status ↕',
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
        <br />
        {this.tableSetup()}
      </section>
      );
}
}
export default SessionDetails;


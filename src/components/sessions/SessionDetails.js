import React from 'react';
import StatusForm from '../input/StatusForm';
import QuestionForm from '../input/QuestionForm';
import QuestionList from '../QuestionsAnswers/QuestionList.js';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Button, Card, Accordion, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios'
import './Session.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
class SessionDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      posts: [],
      queue: [],
      working: [],
      done: [],
      questions: [],
      answers: [],
      sessionId: Number(this.props.match.params.id),
      session: undefined,
      showPopup: false,
      showInfo: false,
      response: true,
      endpoint: "http://127.0.0.1:4001",
      postCreated: 0, 
    };
  }

  postMade = () => {
    this.getStatusList();
    this.getQuestionList();
    this.getAnswerList();
  }
  
  componentDidMount = () => {
    this.getSessionDetails();
    this.getStatusList();
    this.getQuestionList();
    this.getAnswerList();    
    this.tabView();
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

  getQuestionList = () => {
    let questionLink = "https://classroomlive-basic-api.herokuapp.com/questions";
    axios.get(questionLink)
    .then((response) => {
      this.setState({
        questions: (response.data).filter(question => question.session_id === this.state.sessionId),
      });
      this.displayQuesitons();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  getAnswerList = () => {
    let questionLink = "https://classroomlive-basic-api.herokuapp.com/answers";
    axios.get(questionLink)
    .then((response) => {
      this.setState({
        answers: (response.data).filter(answer => answer.session_id === this.state.sessionId),
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
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
  }

  showSessionSpecs = () => {
    let stuckCount = (this.state.posts.filter(post => post.status === "stuck")).length;
    let questionCount = (this.state.posts.filter(post => post.status === "question")).length;
    let workingCount = (this.state.posts.filter(post => post.status === "working")).length;
    let doneCount = (this.state.posts.filter(post => post.status === "done")).length;
    return <section><p>🛑 {stuckCount} - ⚠️ {questionCount} - ✅ {workingCount} - 🔵 {doneCount} <Button onClick={this.info} id="infoButton">i</Button></p></section>;
  }

  getStatusList = () => {
    let postLink = "https://classroomlive-basic-api.herokuapp.com/posts";
    axios.get(postLink)
    .then((response) => {
      let rawPost = (response.data).filter(post => post.session_id === this.state.sessionId)
      // let rawPost2 = (response.data).filter(post => post.session_id === this.state.sessionId)
      // let rawPost3 = (response.data).filter(post => post.session_id === this.state.sessionId)
      this.setState({
        posts: (response.data).filter(post => post.session_id === this.state.sessionId),
        queue: rawPost.filter(post => post.status === "stuck" || post.status === "question"),
        working: rawPost.filter(post => post.status === "working"),
        done: rawPost.filter(post => post.status === "done"),
        dataLoaded: true,
      });
      // this.tableSetup();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
    // this.showSessionSpecs();
    // this.getQuestionList();
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
      message: 'Delete Post?',
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

  info = () => {
    confirmAlert({
      // title: 'Legend',
      // message: 'Legend: ',
      message: 'Stuck: 🛑,\nQuestion: ⚠️,\nWorking: ✅,\nDone: 🔵',
      buttons: [
        {
          label: 'Close',
          onClick: () => this.setState({showPopup: false})
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
        showInfo: false,
      });
      this.postMade();
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error.message);
    });
  }

  tableSetup = (filterChoice) => {
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
      formatter: (cell) => {
        let status = cell;
        if (status === "done") {
          return "🔵";
        }
        else if (status === "working") {
          return "✅";
        }
        else if (status === "stuck") {
          return "🛑";
        }
        else if (status === "question") {
          return "⚠️";
        }
      },
      sort: true
    }, {
      dataField: 'updated_at',
      text: 'Wait Time (Minutes) ↕',
      formatter: (cell) => {
        let dateObj = cell;
        let now = moment(new Date());
        if (typeof cell !== 'object') {
          dateObj = moment (new Date(dateObj));
        }
        let timeDiff = (moment.duration(now.diff(dateObj)))
        return `${timeDiff.days()} days ${timeDiff.hours()} hours ${timeDiff.minutes()} minutes`
      },
      sort: true
    }, 
  ];
    return (
      <ToolkitProvider
      keyField="id"
      data={ filterChoice }
      columns={ columns }
      >
        
  {
    props =>
      <BootstrapTable selectRow={ selectRow } sort={ { dataField: 'updated_at', order: 'asc' } } { ...props.baseProps } />
  }
</ToolkitProvider>)
  }

tabView = () => {
  return (
    <section className="TabMenu">
    <Tabs defaultActiveKey="queue" id="uncontrolled-tab-example" className="Tab">
    <Tab eventKey="queue" title="Queue" className="Tab">
      {this.tableSetup(this.state.queue)}
    </Tab>
    <Tab eventKey="working" title="Working" className="Tab">
    {this.tableSetup(this.state.working)}
    </Tab>
    <Tab eventKey="done" title="Done" className="Tab">
    {this.tableSetup(this.state.done)}
    </Tab>
    <Tab eventKey="questions" title="Q & A" className="Tab">
      <QuestionList session={this.state.sessionId} questions={this.state.questions} answers={this.state.answers} post={this.postMade} />
    </Tab>
  </Tabs>
  </section>
  )
}

render () {
  return (
      <section>
        {this.showSessionDetails()}
        {this.showSessionSpecs()}
        {this.statusAccordion()}
        {/* {this.state.dataLoaded ? this.tabView : ""} */}
        {this.tabView()}

        <br />
        
      </section>
      );
}
}
export default SessionDetails;


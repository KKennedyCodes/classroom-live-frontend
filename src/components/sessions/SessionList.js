import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Session from './Session.js';
import { Redirect } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import { Table } from 'react-bootstrap';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios'
// import axios from 'axios';
import './Session.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
    };
  }


  getSessionList = () => {
    let link = "http://localhost:3000/sessions/";
    axios.get(link)
    .then((response) => {
      this.setState({
        sessions: response.data,
      });
      this.tableSetup();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  componentDidMount = () => {
    this.getSessionList();
  }
  
  // redirect = (id) => {
  //   let link = '/sessions/' + id;
  //   console.log(link);
  //   return <Redirect to={link} />
  // }
 
  tableSetup = () => {
    const pagination = paginationFactory({
      page: 2,
    });
    const selectRow = {
      mode: 'radio', // single row selection
      style: { background: 'red' },
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        this.props.selectSession(row);
        // this.redirect(row.id);
      }
    };
    
    
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true
    }, {
      dataField: 'course_id',
      text: 'Course ID',
      sort: true
    }, {
      dataField: 'task',
      text: 'Task',
      sort: true
    }, {
      dataField: 'task_objective',
      text: 'Objective',
      sort: true
    }, {
      dataField: 'created_at',
      text: 'Date',
      sort: true
    }];
    return (
      <ToolkitProvider
      keyField="id"
      data={ this.state.sessions }
      columns={ columns }
>
  {
    props =>
      <BootstrapTable pagination={ pagination } selectRow={ selectRow } { ...props.baseProps } />
  }
</ToolkitProvider>)
    // ) <BootstrapTable keyField='id' data={ this.state.sessions } columns={ columns } />
  }

  // displaySessions = () => {
  //   console.log(this.state.sessions);
  //   const sessionList = this.state.sessions.map((session, i) => {
  //       return  <tr>
  //                 <td>{session.id}</td>
  //                 <td>{session.course_id}</td>
  //                 <td>{session.task}</td>
  //                 <td>{session.task_objective}</td>
  //                 <td>{session.created_at}</td>
                  
  //               </tr>
  //     });
  //   return sessionList;
  // }
    
  render () {
    return (
      <section>


    {this.tableSetup()}

      </section>
    )};
}

export default Course;

// class Course extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   componentDidMount = () => {
//     this.displaySessions();
//   }
 
//   displaySessions = () => {
//     console.log(this.props);
//     const sessionList = this.props.sessions.map((session, i) => {
//         return <Session date={session.created_at} selectSession={this.props.selectSession} task={session.task} taskObjective={session.task_objective} id={session.id} value={i} key={i}/>
//       });
//     return sessionList;
//   }
    
//   render () {
//     return (
//       <section>
//         <Accordion defaultActiveKey="0">
//         {this.displaySessions()}
//         </Accordion>
//       </section>
//     )};
// }

// export default Course;
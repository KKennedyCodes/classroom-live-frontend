import React from 'react';
import { Redirect } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios'
import moment from 'moment'
import './Session.css'

// import axios from 'axios';
import './Session.css';

class SessionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      time: undefined,
      redirect: false,
      redirctTo: undefined
    };
  }


  getSessionList = () => {
    let link = "https://classroomlive-basic-api.herokuapp.com/sessions";
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    };
    axios.get(link, config)
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
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    this.getSessionList();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  dateFormat(value, row, index) {
    return moment(value).format('DD/MM/YYYY');
 }

  tableSetup = () => {
    const { SearchBar } = Search;
    const pagination = paginationFactory({
      page: 1,
    });
    const selectRow = {
      mode: 'radio', // single row selection
      style: { background: 'red' },
      clickToSelect: true,
      onSelect: (row, isSelect, rowIndex, e) => {
        this.setState({
          redirectTo: row.id,
          redirect: true,
        });
        this.props.selectSession(row);
        // browserHistory.push(`/${rowIndex}`);
        // "/sessions/" +  session.id
        // this.props.selectSession(row);
        // this.redirect(row.id);
      }
    };
    
    
    const columns = [{
      dataField: 'id',
      text: 'ID ↕',
      sort: true
    }, {
      dataField: 'task',
      text: 'Task ↕',
      sort: true
    }, {
      dataField: 'objective',
      text: 'Objective ↕',
      sort: true
    }, {
      dataField: 'date',
      text: 'Date ↕',
      // formatter: (cell) => {
      //   let dateObj = cell;
      //   if (typeof cell !== 'object') {
      //     dateObj = new Date(cell);
      //   }
      //   return `${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${('0' + dateObj.getUTCDate()).slice(-2)}/${dateObj.getUTCFullYear()}`;
      // },
      sort: true
    }];

    return (
      <ToolkitProvider
      keyField="id"
      data={ this.state.sessions }
      columns={ columns }
      search
      className="statusTable"
>
  {
    props => (
      <div >
        <h4>Search Sessions:</h4>
      <SearchBar { ...props.searchProps } />
      <hr color="red"/>
      <p className="note">Choose Row and Click Session Details for More<br />Click Column Headers to Sort</p>
      <BootstrapTable  selectRow={ selectRow } { ...props.baseProps } />
      </div>
    )
    }
</ToolkitProvider>)
    }

  render () {
    if (this.state.redirect) {
      let link = "/sessions/" + this.state.redirectTo
      return <Redirect push to={link} />;
    }
    return (
      <section>
        {this.tableSetup()}
      </section>
    )};
}

export default SessionList;

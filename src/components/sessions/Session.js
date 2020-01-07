import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { NavLink} from "react-router-dom";
import Moment from 'react-moment';
// import './Course.css';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  render () {
    let link="/sessions/"+this.props.id;
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.value}>
          <Moment format="DD/MM/YYYY">{this.props.date}</Moment> - {this.props.task} 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.value}>
          <Card.Body>
            <p>Objective: {this.props.taskObjective}</p>
            <NavLink to={link}><Button variant="outline-secondary" className="sessionButton">Details ◢</Button></NavLink>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )};
}

export default Session;
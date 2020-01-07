import React from 'react';
import Card from 'react-bootstrap/Card';
import StatusExpand from './StatusExpand.js';
import './StatusCard.css';
class StatusCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  statusVariant = (status) => {

      let colorVariant = "";
      if (status.code.color === "red") {
        colorVariant="danger";
      }
      else if (status.code.color === "yellow") {
        colorVariant='warning';
      }
      else if (status.code.color === "green") {
        colorVariant='success';
      }
      else if (status.code.color === "blue") {
        colorVariant = 'primary';
      }
      else {
        colorVariant = 'light';
      }
    return colorVariant;
  }
  
  render () {
    return (
      <Card border="light" style={{ width: '9rem' }} >
        {/* onClick={this.props.selectStudent(this.props.student.id)} */}
      {/* https://i.pravatar.cc/300 */}
      {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>{this.props.student}</Card.Title>
      <Card.Text>
        <StatusExpand />
      </Card.Text>
        </Card.Body>
      </Card>
    )};
}



export default StatusCard;
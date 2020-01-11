import React from 'react';
import StatusForm from '../input/StatusForm';
class SessionDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    };
  }

render () {
  console.log(this.props);
  return (
      <section className="body">
        <h3>{this.props.session.task}</h3>
        <p>Objective: {this.props.session.taskObjective}</p>
        <p>Session Id: {this.props.session.id}</p>
        <StatusForm sessionId={this.props.session.id}/>
      </section>
      );
}
}
export default SessionDetails;
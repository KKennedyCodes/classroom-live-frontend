import React from 'react';
import {Button, Badge} from 'react-bootstrap';

class StatusKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }    

  displayCodes = () => {
    console.log(this.props.codes);
    const codeList = this.props.codes.map((code, i) => {
      let styling = {code};
      let colorVariant = "";
      let caption = "No Status";
      if (styling.code.color === "red") {
        colorVariant="danger";
        caption = "Stuck"
      }
      else if (styling.code.color === "yellow") {
        colorVariant='warning';
        caption = "Question"
      }
      else if (styling.code.color === "green") {
        colorVariant='success';
        caption = "Working"
      }
      else if (styling.code.color === "blue") {
        colorVariant = 'primary';
        caption = "Done"
      }
      else {
        colorVariant = 'light';
      }
        return (
          <Button variant={colorVariant}>
            {caption} 
            <Badge variant="light">
              #
            </Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        )
    });
    return codeList;
  }

  render () {
    return (
      <div>
        {this.displayCodes()}
      </div>
    )};
}

export default StatusKey;
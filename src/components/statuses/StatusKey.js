import React from 'react';
import {Button, Badge} from 'react-bootstrap';

class StatusKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }    

  displayCodes = () => {
    const codeList = this.props.codes.map((code, i) => {
      let styling = {code};
      let colorVariant = '';
      let caption = "No Status";
      if (styling.code.color === "red") {
        colorVariant="danger";
        caption = "Stuck"
      }
      else if (styling.code.color === "yellow") {
        caption = "Question"
        colorVariant='warning';
      }
      else if (styling.code.color === "green") {
        caption = "Working"
        colorVariant='success';
      }
      else if (styling.code.color === "blue") {
        caption = "Done"
        colorVariant = 'primary';
      }
      else{
        colorVariant = 'light';
      }
        return (
          
          <Button variant={colorVariant} key={i}>
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
      <section>
        {this.displayCodes()}
      </section>
    )};
}

export default StatusKey;
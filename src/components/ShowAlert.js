import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function ShowAlert(props) {
  return (
    <Alert variant={props.variant}>
        <p>{props.text}</p>
        <Button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => props.hideAlert()}
            >X</Button>
    </Alert>
  );
}

export default ShowAlert;


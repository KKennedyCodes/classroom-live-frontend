import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import './forms.css';
class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Form className="studentInput">
        <fieldset>
          <Form.Group>
            <Form.Label as="legend">
              Update Status:
            </Form.Label>
            <Form.Check
              type="radio"
              label="Stuck, Can't Make Progress"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Question, but Still Working"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Good, Working Fine"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Done, Task Completed"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Form.Group>
        </fieldset>
          <Form.Group controlId="TaskObjective">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" placeholer="Response Text Here" rows="3" />
          </Form.Group>
          {/* <Form.Group controlId="formHorizontalCheck">
            <Form.Check label="Push to Public FAQ" />
          </Form.Group> */}
          <Form.Check 
            type="switch"
            label="Push to Public FAQ"
            id="disabled-custom-switch"
          />
          <Button variant="light" type="submit">
            Submit
          </Button>

        </Form>
    )};
}

export default StatusForm;

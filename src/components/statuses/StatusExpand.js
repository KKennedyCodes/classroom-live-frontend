import {Button, Collapse} from 'react-bootstrap';
import React, { useState } from 'react';

function StatusExpand() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        Status Comment
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Student Status Comment
        </div>
      </Collapse>
    </section>
  );
}

export default StatusExpand;
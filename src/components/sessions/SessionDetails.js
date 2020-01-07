import React from 'react';
import { useParams} from "react-router-dom";
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import './Course.css';

function SessionDetails () {
  let { id } = useParams();
  return (
      <section className="body">
        <h4>Session Show </h4>
        <h3>ID: {id}</h3>
      </section>
      );
}

export default SessionDetails;
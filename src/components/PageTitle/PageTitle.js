import React from 'react';
import './PageTitle.scss';

import { Col } from 'react-bootstrap'

const PageTitle = (props) => (
  <Col>
    <center><h2 className="mb-4 mt-4">{props.title}</h2></center>
  </Col>
);

export default PageTitle;

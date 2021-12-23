import React from 'react';
import './ClientWorkspace.scss';

import { Row } from 'react-bootstrap'

import ClientProfile from '../../components/ClientProfile/ClientProfile'
import ClientProjectList from '../ClientProjectList/ClientProjectList';

const ClientWorkspace = (props) => (
  <Row className="ClientWorkspace">
    <ClientProfile client={props.client} />
    <ClientProjectList projects={props.projects} />
  </Row>
);

export default ClientWorkspace;

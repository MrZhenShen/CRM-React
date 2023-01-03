import React from 'react';
import './ClientWorkspace.scss';

import { Row } from 'react-bootstrap'

import ClientProfile from '../../components/ClientProfile/ClientProfile'
import ClientProjectList from '../ClientProjectList/ClientProjectList';

const ClientWorkspace = (props) => (
  <Row className="ClientWorkspace">
    <ClientProfile />
    <ClientProjectList />
  </Row>
);

export default ClientWorkspace;

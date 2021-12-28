import React from 'react';
import './ClientWorkspacePage.scss';

import PageTitle from '../../components/PageTitle/PageTitle'
import ClientWorkspace from '../../components/ClientWorkspace/ClientWorkspace'

import { Container, Row, Col } from 'react-bootstrap'

class ClientWorkspacePage extends React.Component {

  render() {
    if (localStorage.getItem('credentials') !== "{}" && JSON.parse(localStorage.getItem('credentials')).is_staff === false) {
      return (
        <Container fluid className="ClientWorkspacePage">
          <PageTitle title={"Client Workspace"} />
          <ClientWorkspace />
        </Container>
      )
    } else {
      return (
        <Container className="ClientWorkspacePage" >
          <Row>
            <PageTitle title={"Issue"} />
            <Col lg={12}>
              <ul>
                <li>You are not authenticated</li>
                <li>You are not client</li>
              </ul>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default ClientWorkspacePage;

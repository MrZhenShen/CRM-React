import React from 'react';
import './ClientProjectList.scss';

import { Col } from 'react-bootstrap'

import ClientProjectItem from '../../components/ClientProjectItem/ClientProjectItem'

class ClientProjectList extends React.Component {

  render() {
    console.log(this.props.projects.length)
    if (this.props.projects.length !== 0) {
      return (
        <Col className="ClientProjectList" lg={9}>
          {this.props.projects.map(project => {
            return <ClientProjectItem project={project} key={project.id} />
          })}
        </Col>
      )
    } else {
      return (
        <Col className="ClientProjectList" lg={9}>
          <center>
          <h1>Your do not have any project yet(</h1>
          </center>
        </Col>
      )
    }
  }
}

export default ClientProjectList;

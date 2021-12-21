import React from 'react';
import './ClientProjectList.scss';

import { Col } from 'react-bootstrap'

import ClientProjectItem from '../../components/ClientProjectItem/ClientProjectItem'

class ClientProjectList extends React.Component {

  render() {
    return (
      <Col className="ClientProjectList" lg={9}>
        {this.props.projects.map(project => {
          return <ClientProjectItem project={project} key={project.id} />
        })}
      </Col>
    )
  }
}

export default ClientProjectList;

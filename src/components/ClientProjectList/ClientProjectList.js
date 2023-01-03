import React from 'react';
import './ClientProjectList.scss';

import { Col } from 'react-bootstrap'

import ClientProjectItem from '../../components/ClientProjectItem/ClientProjectItem'

class ClientProjectList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      apiLink: 'http://127.0.0.1:8000/api',
      token: JSON.parse(localStorage.getItem('credentials')).token,
      clientId: JSON.parse(localStorage.getItem('credentials')).id
    }
  }

  componentDidMount() {

    if (localStorage.getItem('credentials') !== "{}" && JSON.parse(localStorage.getItem('credentials')).is_staff === false) {

      fetch(`${this.state.apiLink}/projects-client/${this.state.clientId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + this.state.token
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({ projects: data })
        })

    }
    else {
      this.setState({
        projects: []
      })
    }
  }

  render() {
    if (this.state.projects.length !== undefined & this.state.projects.length !== 0) {
      return (
        <Col className="ClientProjectList" lg={9}>
          {this.state.projects.map(project => {
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

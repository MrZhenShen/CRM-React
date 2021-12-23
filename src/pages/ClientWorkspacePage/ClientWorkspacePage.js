import React from 'react';
import './ClientWorkspacePage.scss';

import PageTitle from '../../components/PageTitle/PageTitle'
import ClientWorkspace from '../../components/ClientWorkspace/ClientWorkspace'

class ClientWorkspacePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      client: {},
      projects: [],
      apiLink: 'http://127.0.0.1:8000/api',
      token: JSON.parse(localStorage.getItem('token')).token,
      clientId: JSON.parse(localStorage.getItem('token')).id
    }
  }

  componentDidMount() {

    if (localStorage.getItem('token') !== "{}" && JSON.parse(localStorage.getItem('token')).is_staff === false) {

      fetch(`${this.state.apiLink}/clients/${this.state.clientId}/`, {
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
          this.setState({ client: data })
        })

      fetch(`${this.state.apiLink}/client-projects/${this.state.clientId}/`, {
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
        client: {},
        projects: []
      })
    }
  }

  render() {
    if (localStorage.getItem('token') !== "{}" && JSON.parse(localStorage.getItem('token')).is_staff === false) {
      return (
        <div className="ClientWorkspacePage container-fluid">
          <PageTitle title={"Client Workspace"} />
          <ClientWorkspace client={this.state.client} projects={this.state.projects} />
        </div>
      )
    } else {
      return (
        <div className="ClientWorkspacePage" >
          <div className="container">
            <div className="row">
              <ul>
              <h2>Issue due to:</h2>
              <li>You are not authenticated</li>
              <li>You are not client</li>
            </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ClientWorkspacePage;

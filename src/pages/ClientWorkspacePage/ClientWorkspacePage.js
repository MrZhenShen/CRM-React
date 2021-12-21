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
      apiLink: 'http://127.0.0.1:8000/api'
    }
  }

  componentDidMount() {

    if (localStorage.getItem('token') !== "{}" && JSON.parse(localStorage.getItem('token')).is_staff === false) {

      fetch("http://127.0.0.1:8000/api/clients/4/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token')).token
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.setState({ client: data })
        })

      fetch("http://127.0.0.1:8000/api/client-projects/4/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + JSON.parse(localStorage.getItem('token')).token
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

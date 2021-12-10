import React from 'react';
import './ClientWorkspacePage.scss';

import PageTitle from '../../components/PageTitle/PageTitle'
import ClientWorkspace from '../../components/ClientWorkspace/ClientWorkspace'

class ClientWorkspacePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      client: {}
    }
  }

  componentDidMount() {
    if(JSON.parse(localStorage.getItem('token')).is_staff === false) {
      alert('is client')
    }

    if(localStorage.getItem('token') !== "{}") {
      
      fetch(`${this.state.apiLink}/clients/${JSON.parse(localStorage.getItem('token')).token}`, {
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
        console.log(data)
        this.setState({ client: data })
      })
    }
    else {
      this.setState({ client: {} })
    }
  }

  render() {
    if (localStorage.getItem('token') !== "{}") {
      return (
        <div className="ClientWorkspacePage container-fluid">
        <PageTitle title={"Client Workspace"} />
        <ClientWorkspace />
      </div>
      )
    } else {
      return (
        <div className="ClientWorkspacePage" >
          <div className="container">
            <div className="row">
              <h3>You are not authenticated</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ClientWorkspacePage;

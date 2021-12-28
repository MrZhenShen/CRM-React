import React from 'react';
import './ClientProfile.scss';

import { Button, Col } from 'react-bootstrap';

import ClientInfoModal from '../ClientInfoModal/ClientInfoModal';

class ClientProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      client: {},
      apiLink: 'http://127.0.0.1:8000/api',
      token: JSON.parse(localStorage.getItem('credentials')).token,
      clientId: JSON.parse(localStorage.getItem('credentials')).id
    }
  }

  componentDidMount() {
    if (localStorage.getItem('credentials') !== "{}" && JSON.parse(localStorage.getItem('credentials')).is_staff === false) {
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
    }
  }

  saveEdit(data) {
    this.setState({ client: data })
  }

  render() {
    return (
      <Col className="ClientProfile" lg={3}>
        <div className="profile-wrapper">
          <h2>{this.state.client.first_name} {this.state.client.last_name}</h2>
          <h6>id: {this.state.client.id}</h6>
          <p>Company: {this.state.client.company_name}</p>
          <p>{this.state.client.email}</p>
          <p>{this.state.client.telephone_number}</p>
          <Button onClick={() => this.setState({ modalShow: true })}>Edit profile</Button>
          <ClientInfoModal show={this.state.modalShow} client={this.state.client} onHide={() => this.setState({ modalShow: false })} onEdit={this.saveEdit.bind(this)}/>
        </div>
      </Col>
    )
  }
}

export default ClientProfile;

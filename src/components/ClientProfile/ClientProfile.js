import React from 'react';
import './ClientProfile.scss';

import { Button, Col } from 'react-bootstrap';

import ClientInfoModal from '../ClientInfoModal/ClientInfoModal';

class ClientProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalShow: false
    }
  }

  render() {
    return (
      <Col className="ClientProfile" lg={3}>
        <div className="profile-wrapper">
          <h2>{this.props.client.first_name} {this.props.client.last_name}</h2>
          <h6>id: {this.props.client.id}</h6>
          <p>Company: {this.props.client.company_name}</p>
          <p>{this.props.client.email}</p>
          <p>{this.props.client.telephone_number}</p>
          <Button onClick={() => this.setState({modalShow: true})}>Edit profile</Button>
          <ClientInfoModal show={this.state.modalShow} client={this.props.client} onHide={() => this.setState({modalShow: false})}/>
        </div>
      </Col>
    )
  }
}

export default ClientProfile;

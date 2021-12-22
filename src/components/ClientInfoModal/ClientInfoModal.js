import React from 'react';
import './ClientInfoModal.scss';

import { Button, Modal } from 'react-bootstrap';

class ClientInfoModal extends React.Component {

  constructor(props) {
    super(props)

  }

  handleHide() {
    this.props.onHide()
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Anton Antonov
            {/* {this.props.client.first_name} {this.props.client.last_name} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Anton Antonov</h2>
          <h6>id: 61616272</h6>
          <p>Company: SoftServe</p>
          <p>anton@mail.com</p>
          <p>+38000999111</p>
          {/* <p>{this.props.client.id}</p>
          <p>{this.props.client.birth_date}</p>
          <p>{this.props.client.telephone_number}</p>
          <p>{this.props.client.email}</p>
          <p>{this.props.client.is_staff}</p>
          <p>{this.props.client.company_name}</p>
          <p>{this.props.client.company_link}</p>
          <p>{this.props.client.industry}</p>
          <p>{this.props.client.role}</p>
          <p>{this.props.client.country}</p>
          <p>{this.props.client.city}</p> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleHide.bind(this)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}


export default ClientInfoModal;

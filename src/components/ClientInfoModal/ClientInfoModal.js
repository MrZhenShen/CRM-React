import React from 'react';
import PropTypes from 'prop-types';
import './ClientInfoModal.scss';

import { Button, Modal } from 'react-bootstrap';

class ClientInfoModal extends React.Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.onClickClose()
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.client.first_name} {this.props.client.last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.client.id}</p>
          <p>{this.props.client.birth_date}</p>
          <p>{this.props.client.telephone_number}</p>
          <p>{this.props.client.email}</p>
          <p>{this.props.client.is_staff}</p>
          <p>{this.props.client.company_name}</p>
          <p>{this.props.client.company_link}</p>
          <p>{this.props.client.industry}</p>
          <p>{this.props.client.role}</p>
          <p>{this.props.client.country}</p>
          <p>{this.props.client.city}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

ClientInfoModal.propTypes = {};

ClientInfoModal.defaultProps = {};

export default ClientInfoModal;

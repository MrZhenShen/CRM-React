import React from 'react';
import './ProjectAboutClientModal.scss';

import { Modal } from 'react-bootstrap';

class ProjectAboutClientModal extends React.Component {
  render() {
    return (

      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.client.first_name} {this.props.client.last_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>email: {this.props.client.email}</p>
          <p>number: {this.props.client.telephone_number}</p>
          <p>Company: {this.props.client.company_name}</p>
          <a href={this.props.client.company_link}>
            <p>
              Company cite: {this.props.client.company_link}
            </p>
          </a>
          <p>Industry: {this.props.client.industry}</p>
          <p>Role: {this.props.client.role}</p>
          <p>Country: {this.props.client.country}</p>
          <p>City: {this.props.client.city}</p>


        </Modal.Body>
      </Modal>
    )
  }
}

export default ProjectAboutClientModal;

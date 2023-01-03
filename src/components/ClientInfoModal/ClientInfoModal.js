import React from 'react';
import './ClientInfoModal.scss';

import { Button, Modal, Form } from 'react-bootstrap';

class ClientInfoModal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasChange: false,
      apiLink: 'http://127.0.0.1:8000/api',
      token: JSON.parse(localStorage.getItem('credentials')).token,
      first_name:       "",
      last_name:        "",
      email:            "",
      telephone_number: "",
      role:             "",
      company_name:     "",
      company_link:     "",
      industry:         "",
      country:          "",
      city:             ""
    }
  }

  componentWillReceiveProps() {
    this.setState({
      first_name:       this.props.client.first_name,
      last_name:        this.props.client.last_name,
      email:            this.props.client.email,
      telephone_number: this.props.client.telephone_number,
      role:             this.props.client.role,
      company_name:     this.props.client.company_name,
      company_link:     this.props.client.company_link,
      industry:         this.props.client.industry,
      country:          this.props.client.country,
      city:             this.props.client.city
    })
  }

  handleHide() {
    this.props.onHide()
  }

  handleSave() {
    fetch(`${this.state.apiLink}/clients/${this.props.client.id}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        first_name:       this.state.first_name,
        last_name:        this.state.last_name,
        email:            this.state.email,
        username:         this.state.email.split("@")[0],
        telephone_number: this.state.telephone_number,
        role:             this.state.role,
        company_name:     this.state.company_name,
        company_link:     this.state.company_link,
        industry:         this.state.industry,
        country:          this.state.country,
        city:             this.state.city
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.state.token
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.handleHide()
        this.props.onEdit(data)
      })
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
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-wrapper">
            <div>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="tel" placeholder="+38(093) 111-11-11" value={this.state.telephone_number} onChange={(e) => this.setState({ telephone_number: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label>*Role in company</Form.Label>
                <Form.Control type="text" placeholder="Business analyst" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value})} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="formCompanyName">
                <Form.Label>Company name</Form.Label>
                <Form.Control type="text" placeholder="Company name" value={this.state.company_name} onChange={(e) => this.setState({ company_name: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCompanyWebsite">
                <Form.Label>*Company Website</Form.Label>
                <Form.Control type="text" placeholder="Company website" value={this.state.company_link} onChange={(e) => this.setState({ company_link: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIndustry">
                <Form.Label>Industry</Form.Label>
                <Form.Control type="text" placeholder="*Education" value={this.state.industry} onChange={(e) => this.setState({ industry: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label>*Country</Form.Label>
                <Form.Control type="text" placeholder="Country" value={this.state.country} onChange={(e) => this.setState({ country: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>*City</Form.Label>
                <Form.Control type="text" placeholder="City" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value})} />
              </Form.Group>
            </div>

          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={this.handleSave.bind(this)}>
            Save
          </Button>
          <Button variant="outline-secondary" onClick={this.handleHide.bind(this)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}


export default ClientInfoModal;

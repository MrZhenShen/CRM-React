import React from 'react';
import './ClientInfoModal.scss';

import { Button, Modal, Form } from 'react-bootstrap';

class ClientInfoModal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasChange: false,
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
  componentDidMount() {
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
    // this.props.onHide()
  }


  handleChanges() {

    if (this.props.client.first_name      !== this.state.first_name 
    || this.props.client.last_name        !== this.state.last_name 
    || this.props.client.email            !== this.state.email 
    || this.props.client.telephone_number !== this.state.telephone_number 
    || this.props.client.role             !== this.state.role 
    || this.props.client.company_name     !== this.state.company_name 
    || this.props.client.company_link     !== this.state.company_link 
    || this.props.client.industry         !== this.state.industry 
    || this.props.client.country          !== this.state.country 
    || this.props.client.city             !== this.state.city) {
      this.setState({hasChange: true})
    } else {
      this.setState({hasChange: false})
    }
    console.log(this.state.hasChange)
  }

  render() {
    this.handleChanges.bind(this)
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
                <Form.Label>Role in company</Form.Label>
                <Form.Control type="text" placeholder="Business analyst" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value})} />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="formCompanyName">
                <Form.Label>Company name</Form.Label>
                <Form.Control type="text" placeholder="Company name" value={this.state.company_name} onChange={(e) => this.setState({ company_name: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCompanyWebsite">
                <Form.Label>Company Website</Form.Label>
                <Form.Control type="text" placeholder="Company website" value={this.state.company_link} onChange={(e) => this.setState({ company_link: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIndustry">
                <Form.Label>Industry</Form.Label>
                <Form.Control type="text" placeholder="*Education" value={this.state.industry} onChange={(e) => this.setState({ industry: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" value={this.state.country} onChange={(e) => this.setState({ country: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value})} />
              </Form.Group>
            </div>

          </Form>
          {/* 
            'first_name',
            'last_name',
            'email',
            'telephone_number',
            'role',

            'company_name',
            'company_link',
            'industry',
            'country',
            'city'
             */}

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

import React from 'react';
import './LoginModal.scss';
import { connect } from 'react-redux'

import { Modal, Form, Button } from 'react-bootstrap';

class LoginModal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      apiLink: 'http://localhost:8000/api'
    }
  }

  handleHide() {
    this.props.onHide()
  }

  handleSubmit() {
    fetch(`${this.state.apiLink}/login/`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.error !== "Wrong Credentials") {
          this.props.dispatch({ type: 'LOG_IN' })
          data.is_staff ? this.props.dispatch({ type: 'IS_STAFF' }) : this.props.dispatch({ type: 'IS_NOT_STAFF' })
          localStorage.setItem("credentials", JSON.stringify(data))
          this.setState({
            email: "",
            password: ""
          })

        }
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
        <Modal.Title>Log In Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="form-wrapper">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </Form.Group>

        </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={this.handleSubmit.bind(this)}>
          Login
        </Button>
        <Button variant="outline-secondary" onClick={this.handleHide.bind(this)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapDispatchToProps)(LoginModal);

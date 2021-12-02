import React from 'react';
import './LoginPage.scss';
import { Form, Button } from 'react-bootstrap';

import PageTitle from '../../components/PageTitle/PageTitle'

class LoginPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      apiLink: 'http://localhost:8000/api'
    }
  }


  handleLoginChange(event) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
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
        // this.setState({ projects: data })
        console.log(data)
        localStorage.setItem("token", JSON.stringify(data))
      })
  }

  render() {
    return (
      <div className="LoginPage container">
        <PageTitle title="Login" />
        <Form className="row">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleLoginChange.bind(this)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}


export default LoginPage;

import React from 'react';
import './LoginPage.scss';
import {connect} from 'react-redux'

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
        this.props.dispatch({type: 'LOG_IN'})
        localStorage.setItem("token", JSON.stringify(data))
        this.setState({
          email: "",
          password: ""
        })
      })
  }

  render() {
    return (
      <div className="LoginPage container">
        <PageTitle title="Login" />
        <Form className="row">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


export default connect(mapDispatchToProps)(LoginPage);

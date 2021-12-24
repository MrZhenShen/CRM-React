import React from 'react';
import './RegisterPage.scss';
import { connect } from 'react-redux'
import PageTitle from '../../components/PageTitle/PageTitle'
import { Form, Button, Row } from 'react-bootstrap'

class RegisterPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      apiLink: 'http://localhost:8000/api',

      first_name: '',
      last_name: '',
      email: '',
      telephone_number: '',
      password: '',
      company_name: '',
      industry: '',
      confirm_password: ''
    }
  }

  logIn() {
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
        this.props.dispatch({ type: 'LOG_IN' })
        localStorage.setItem("token", JSON.stringify(data))
      })
  }

  handleSubmit() {
    if (this.state.password === this.state.confirm_password) {

      fetch(`${this.state.apiLink}/register/`, {
        method: 'POST',
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          telephone_number: this.state.telephone_number,
          email: this.state.email,
          password: this.state.password,
          company_name: this.state.company_name,
          industry: this.state.industry,
          username: this.state.email.split("@")[0]
        }),

        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.username[0] !== "A user with that username already exists.") {
            this.logIn()
            this.setState({
              first_name: '',
              last_name: '',
              email: '',
              telephone_number: '',
              password: '',
              company_name: '',
              industry: '',
              confirm_password: ''
            })
          } else {
            alert('User with such email already exists')
          }
        })
    } else {
      alert("Password does not match to confirm password")
    }
  }

  render() {
    return (

      <div className="RegisterPage container">
        <PageTitle title="Register" />

        <Row className="Row justify-content-md-center">
          <Form className="Form row w-50 mb-4">
            <Form.Group className="Form-Group">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Anton" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Antonov" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="abc@xyz.com" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              <Form.Control className="mt-2" type="password" placeholder="Confrim password" value={this.state.confirm_password} onChange={e => this.setState({ confirm_password: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="+(380)" value={this.state.telephone_number} onChange={e => this.setState({ telephone_number: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="" value={this.state.company_name} onChange={e => this.setState({ company_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Industry</Form.Label>
              <Form.Control type="text" placeholder="" value={this.state.industry} onChange={e => this.setState({ industry: e.target.value })} />
            </Form.Group>

            <Button className="mt-4" variant="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>

          </Form>
        </Row>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapDispatchToProps)(RegisterPage);

import React from 'react';
import './RegisterPage.scss';
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

  handleSubmit() {
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
        console.log(data)
        // localStorage.setItem("token", JSON.stringify(data))
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
      })
  }

  render() {
    return (
      
      <div className="RegisterPage container">
        <PageTitle title="Register" />

        <Row className="Row justify-content-md-center">
          <Form className="Form row w-50 mb-4">
            <Form.Group className="Form-Group">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Anton" onChange={e => this.setState({ first_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Antonov" onChange={e => this.setState({ last_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="abc@xyz.com" onChange={e => this.setState({ email: e.target.value })} />
            </Form.Group>

            <Form.Group className="mt-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
              <Form.Control className="mt-2" type="password" placeholder="Confrim password" onChange={e => this.setState({ confirm_password: e.target.value })} />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="+(380)" onChange={e => this.setState({ telephone_number: e.target.value })} />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="" onChange={e => this.setState({ company_name: e.target.value })} />
            </Form.Group>

            <Form.Group className="">
              <Form.Label>Industry</Form.Label>
              <Form.Control type="text" placeholder="" onChange={e => this.setState({ industry: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-2 mt-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept to data policies and collect cookies" />
            </Form.Group>

            <Button variant="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>

          </Form>
        </Row>

      </div>
    )
  }
}

RegisterPage.propTypes = {};

RegisterPage.defaultProps = {};

export default RegisterPage;

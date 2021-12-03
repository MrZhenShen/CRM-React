import React from 'react';
import './RegisterPage.scss';
import PageTitle from '../../components/PageTitle/PageTitle'
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

class RegisterPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      surname: '',
      phone_num: '',
      companny: '',
      industry: '',
      email: '',
      password: ''
      //apiLink: 'http://localhost:8000/api'
    }
  }

  componentDidMount() {
    localStorage.setItem("token", JSON.stringify({}))
  }

  handleFirstNameChange(event) {
    this.setState({ first_name: event.target.value })
  }
  handleSurnameChange(event) {
    this.setState({ surname: event.target.value })
  }
  handleLoginChange(event) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }
  handlePhoneNumberChange(event) {
    this.setState({ phone_num: event.target.value })
  }
  handleCompanyChange(event) {
    this.setState({ companny: event.target.value })
  }
  handleIndustryChange(event) {
    this.setState({ industry: event.target.value })
  }

  handleSubmit() {
    fetch(`${this.state.apiLink}/regist/`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: this.state.first_name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
        phone_num: this.state.phone_num,
        company_name: this.state.company,
        industry: this.state.industry,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data))
        this.setState({
          first_name: '',
          surname: '',
          phone_num: '',
          companny: '',
          industry: '',
          email: '',
          password: ''
        })
      })
  }

  render(){
    return(
      <div className="RegisterPage container">
        <PageTitle title="Register" />
        
        <Row className="Row justify-content-md-center">
        <Form className="Form row w-50 mb-4">
          <Form.Group className="Form-Group">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
            
          <Form.Group className="mt-2">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Surname" />
          </Form.Group>

          <Form.Group className="mt-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>  

          <Form.Group className="mt-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Control className="mt-2" type="password" placeholder="Confrim password" />
          </Form.Group>

          <Form.Group className="">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="+(380)" />
          </Form.Group>

          <Form.Group className="">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="">
            <Form.Label>Industry</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2 mt-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary">Submit</Button>

        </Form>
        </Row>

      </div>
    )    
  }
}

RegisterPage.propTypes = {};

RegisterPage.defaultProps = {};

export default RegisterPage;

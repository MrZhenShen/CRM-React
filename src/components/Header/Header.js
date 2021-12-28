import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showLoginModal: false,
      showRegisterModal: false,
      colorLinkHeader: {
        textDecoration: 'none',
        color: '#ffc107'
      },
      colorLogoHeader: {
        textDecoration: 'none',
        color: '#ffc107',
        fontWeight: 'bold'
      }
    }
  }

  setShowLoginModal(show) {
    this.setState({ showLoginModal: show })
  }
  setShowRegisterModal(show) {
    this.setState({ showRegisterModal: show })
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to='/landing' style={this.state.colorLogoHeader}>
              Yellow Minders</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/landing' className="ms-4" style={this.state.colorLinkHeader}>Home</NavLink>
              <NavLink to='/busket' className="ms-3" style={this.state.colorLinkHeader}>Busket</NavLink>
            </Nav>
            {
              this.props.isAuthenticated || this.props.isAuthenticated === undefined
                ? <IsAuthHeader isStaff={this.props.isStaff} dispatch={this.props.dispatch} styles={this.state.colorLinkHeader}/>
                : <IsNotAuthHeader
                  setShowLoginModal={this.setShowLoginModal.bind(this)}
                  showLoginModal={this.state.showLoginModal}

                  setShowRegisterModal={this.setShowRegisterModal.bind(this)}
                  showRegisterModal={this.state.showRegisterModal} />
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

function IsAuthHeader(props) {
  return (
    <Nav>
      {
        props.isStaff
          ? <NavLink to='/admin-panel' style={props.styles}>Admin Panel</NavLink>
          : <NavLink to='/client-workspace' style={props.styles}>Client workspace</NavLink>
      }
      <NavLink to='/landing' className="ms-4" style={props.styles} onClick={() => props.dispatch({ type: 'LOG_OUT' })}>Sign out</NavLink>
    </Nav>
  )
}

function IsNotAuthHeader(props) {
  return (
    <Nav>
      <Button variant="outline-warning" className="navbar-link ms-4" onClick={() => props.setShowLoginModal(true)}>Sign in</Button>
      <LoginModal show={props.showLoginModal} onHide={() => props.setShowLoginModal(false)} />

      <Button variant="warning" className="navbar-link ms-4" onClick={() => props.setShowRegisterModal(true)}>Sign up</Button>
      <RegisterModal show={props.showRegisterModal} onHide={() => props.setShowRegisterModal(false)} />
    </Nav>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    isStaff: state.isStaff
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

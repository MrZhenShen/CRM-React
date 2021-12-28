import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';

import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showLoginModal: false,
      showRegisterModal: false
    }
  }

  setShowLoginModal(show) {
    this.setState({showLoginModal: show})
  }
  setShowRegisterModal(show) {
    this.setState({showRegisterModal: show})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand">Yellow Minders</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {
              this.props.isAuthenticated || this.props.isAuthenticated === undefined 
                ? <IsAuthHeader isStaff={this.props.isStaff} dispatch={this.props.dispatch}/>
                : <IsNotAuthHeader 
                setShowLoginModal={this.setShowLoginModal.bind(this)}
                showLoginModal={this.state.showLoginModal} 

                setShowRegisterModal={this.setShowRegisterModal.bind(this)} 
                showRegisterModal={this.state.showRegisterModal}/>
            }
          </div>
        </div>
      </nav>
    )
  }
}

function IsAuthHeader(props) {
  return (
    <div className="navbar-nav">
      <NavLink to='/landing' className="navbar-link ms-4">Home</NavLink>
      <NavLink to='/busket' className="navbar-link ms-4" >Busket</NavLink>
      {
        props.isStaff
          ? <NavLink to='/admin-panel' className="navbar-link ms-4">Admin Panel</NavLink>
          : <NavLink to='/client-workspace' className="navbar-link ms-4">Client workspace</NavLink>
      }
      <NavLink to='/landing' className="navbar-link ms-4" onClick={() => props.dispatch({ type: 'LOG_OUT' })}>Sign out</NavLink>
    </div>
  )
}

function IsNotAuthHeader(props) {
  return (
    <div className="navbar-nav">
      <NavLink to='/landing' className="navbar-link ms-4">Home</NavLink>
      <NavLink to='/busket' className="navbar-link ms-4" >Busket</NavLink>

      <Button variant="outline-primary" className="navbar-link ms-4" onClick={() => props.setShowLoginModal(true)}>Login</Button>
      <LoginModal show={props.showLoginModal} onHide={() => props.setShowLoginModal(false)}/>

      <Button variant="primary" className="navbar-link ms-4" onClick={() => props.setShowRegisterModal(true)}>Register</Button>
      <RegisterModal show={props.showRegisterModal} onHide={() => props.setShowRegisterModal(false)}/>
    </div>
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

import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class Header extends React.Component {

  handleSignOut() {
    this.props.dispatch({ type: 'LOG_OUT' })
    localStorage.setItem("credentials", JSON.stringify({}))
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
            <div className="navbar-nav">
              <NavLink to='/landing' className="navbar-link ms-4">Home</NavLink>
              <NavLink to='/busket' className="navbar-link ms-4" >Busket</NavLink>
              <NavLink to='/admin-panel' className="navbar-link ms-4">Admin Panel</NavLink>
              <NavLink to='/client-workspace' className="navbar-link ms-4">Client workspace</NavLink>
              {
                !this.props.isAuthenticated
                  ? <NavLink to='/login' className="navbar-link ms-4">Log In</NavLink>
                  : <NavLink to='/landing' className="navbar-link ms-4" onClick={() => this.props.dispatch({ type: 'LOG_OUT' })}>Sign out</NavLink>
              }
              <NavLink to='/register' className="navbar-link ms-4">Register</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

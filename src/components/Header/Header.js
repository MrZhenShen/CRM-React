import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {


  constructor(props) {
    super(props);

    
  }

  handleSignOut() {
    localStorage.setItem("token", JSON.stringify({}))
    alert("Sign out") 
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Yellow Minders</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to='/landing' className="navbar-link ms-4">Home</NavLink>
              <NavLink to='/busket' className="navbar-link ms-4" >Busket</NavLink>
              <NavLink to='/admin-panel' className="navbar-link ms-4">Admin Panel</NavLink>
              <NavLink to='/login' className="navbar-link ms-4">Login</NavLink>
              <a className="navbar-link ms-4" onClick={this.handleSignOut.bind(this)}>Sign out</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;

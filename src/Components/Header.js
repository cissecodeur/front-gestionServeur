import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
  {/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="fake_url" role="button"><i className="fas fa-bars" /></a>
    </li>
    
    <li className="nav-item d-none d-sm-inline-block">
      <Link to="/contact" className="nav-link">Contact</Link>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="rechercher" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;

    <Link to="/" className="form-control form-control-navbar">
     <i className="fas fa-sign-out-alt" ></i> &nbsp;
         Deconnexion
    </Link>
  </form>
 
 
                
</nav>
{/* /.navbar */}

                
            </div>
        )
    }
}

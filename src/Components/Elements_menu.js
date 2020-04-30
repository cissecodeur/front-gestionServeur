import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Elements_menu extends Component {
    render() {
        return (
            <div>
                 {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="https://media.gettyimages.com/photos/firewall-picture-id171317272?s=2048x2048" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">OSIRIS</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
  
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            <Link to="/listserver" className="nav-link active">
              <i className="fa fa-list" aria-hidden="true" /> &nbsp;
              <p>
                {this.props.ListServeur} 
              </p>
            </Link>
                       
            </li>

            <li className="nav-item">
                <Link to="/addserver" className="nav-link">
                  <i className="fa fa-server" aria-hidden="true"/> &nbsp;
                  <p>{ this.props.Addserver }</p>
                  <span className="right badge badge-danger">New</span>
                </Link>
                
            </li>


              
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Actions
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">

           
                <li className="nav-item">
                <Link to="/managementserver" className="nav-link">
                  <i className="fab fa-linux" aria-hidden = "true"/> &nbsp;
                  <p>{this.props.ManagementServer} </p>
                </Link>
                
                </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-sign-out-alt" ></i> &nbsp;
                  <p>Deconnexion</p>
                </Link>
                
                </li>
               
            </ul>
          </li>
      
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>

                
            </div>
        )
    }
}

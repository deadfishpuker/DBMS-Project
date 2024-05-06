import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationComponent = () => {

  const {isAuthenticated, user}=useSelector(state => state.auth); //returns object

  return( 
  <nav className="navbar expand-lg navbar-dark bg-secondary">
    <Link className="navbar-brand ms-5" to="/">
      React Firebase File System
    </Link>
  
  <ul className="navbar-nav ms-auto me-5 d-flex flex-row">
    {
      isAuthenticated ? (
        <>
          <li className="nav-item mx-2">
          <Link className="btn btn-primary btn-sm" to="/dashboard">
            Dashboard
          </Link>
          </li>
          <li className="nav-item">
          <button className="btn btn-success btn-sm">
            Logout
          </button>
          </li>
        </>
      )
      :
      (
        <>
          <li className="nav-item mx-2">
          <Link className="btn btn-primary btn-sm" to="/login">
            Login
          </Link>
          </li>
          <li className="nav-item">
          <Link className="btn btn-success btn-sm" to="/register">
            Register
          </Link>
        </li>
        </>
      )
    }
  </ul>
  </nav>
  );
};

export default NavigationComponent;
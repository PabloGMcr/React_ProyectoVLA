import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid .text-white">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <NavLink className="navbar-brand" to="/">
            <img
              class="logo w-25 h-25"
              src="https://i.ibb.co/0Bx7dxB/img1-removebg-preview-4.png"
              alt="img1-removebg-preview-4"
            ></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link .text-white" to="/">
                  HOME <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/works">
                  CURSOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/acercavla">
                  ACERCA DE VLA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/empleados">
                  EMPLEADOS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/hookform">
                  REGISTRO
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

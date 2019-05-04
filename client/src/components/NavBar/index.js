import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand brand-title" to="#">
          Google Books Search
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/saved">
                Saved
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

  );
};

export default NavBar;

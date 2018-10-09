import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="pos-fixed w-100">
    {/* N A V B A R */}
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item navbar-logo" href="https://bulma.io">
            TEXTPEDIA
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/register" activeClassName="active">
              Sign Up
            </NavLink>
            <NavLink className="navbar-item" to="/howitworks" activeClassName="active">
              How It Works
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
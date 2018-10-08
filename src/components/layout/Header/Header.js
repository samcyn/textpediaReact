import React from "react";
import "./Header.css";

const Header = () => (
  <header className="pos-fixed w-100">
    {/* N A V B A R */}
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
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
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
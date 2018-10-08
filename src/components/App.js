import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <div className="app">
        <section className="hero is-info is-large">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active" href="/">
                      Home
                    </a>
                    <a className="navbar-item" href="/">
                      Examples
                    </a>
                    <a className="navbar-item" href="/">
                      Documentation
                    </a>
                    <span className="navbar-item">
                      <a className="button is-info is-inverted" href="/">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Title</p>
              <p className="subtitle">Subtitle</p>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                  <a href="/">Overview</a>
                  </li>
                  <li>
                  <a href="/">Modifiers</a>
                  </li>
                  <li>
                  <a href="/">Grid</a>
                  </li>
                  <li>
                  <a href="/">Elements</a>
                  </li>
                  <li>
                  <a href="/">Components</a>
                  </li>
                  <li>
                  <a href="/">Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>;
  }
}

export default App;

import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import iphone from "../assets/iphone.png";
import "./App.css";
import Header from "./layout/Header/Header";
import HowItWorks from "./pages/How-it-works/How-it-works";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Confirmation from "./pages/Confirmation/Confirmation";
import Success from "./pages/Success/Success";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* H  E A D E R */}
        <Header/>

        <section id="hero">
          <div className="container">
            <div className="columns is-multiline align-items-center justify-content-center">
              <div className="column is-12-mobile is-5-tablet is-5-desktop">
                <figure className="image">
                  <img src={iphone} alt="Demo" />
                </figure>
              </div>
              <div className="column is-12-mobile is-7-tablet is-7-desktop">
                {/* R O U T E R  */}
                <Switch>
                  <Route exact path='/' component={ Home } />
                  <Route exact path='/register' component={ Register } />
                  <Route exact path='/howitworks' component={ HowItWorks } />
                  <Route exact path='/confirmation' component={ Confirmation } />
                  <Route exact path='/success' component={ Success } />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

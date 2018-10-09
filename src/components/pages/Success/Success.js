import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";

import "./Success.css";

const Success = () => (
  <Fragment>
    <span>TRY TEXTPEDIA</span>
    <h1>SUCCESS</h1>
    <p>Your account has been confirmed</p>
    <br/>
    <Link to="/" className="button is-primary">Back Home</Link>
  </Fragment>
);

export default Success;

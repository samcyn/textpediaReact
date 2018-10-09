import React, { Fragment } from "react";
import "./Register.css";
import Button from "../../common/Button/Button";

const Register = () => (
  <Fragment>
    <span>TRY TEXTPEDIA</span>
    <h1>SIGN UP</h1>

    <form className="form">
      <div className="field">
        <label className="label has-text-primary">Phone Number</label>
        <div className="control">
          <input className="input" type="number" placeholder="Phone Number" />
        </div>
        {/* <p class="help">This is a help text</p> */}
      </div>
      <div className="field">
        <label className="label has-text-primary">Email Address</label>
        <div className="control">
          <input className="input" type="email" placeholder="Email Address" />
        </div>
        {/* <p class="help">This is a help text</p> */}
      </div>
      <div className="field ">
        <div className="control">
          {/* reuseable component */}
          <Button className="is-primary">Sign Up</Button>
        </div>
      </div>
    </form>
  </Fragment>
);

export default Register;

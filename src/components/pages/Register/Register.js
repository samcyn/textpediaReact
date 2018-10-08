import React, { Fragment } from "react";
import "./Register.css";

const Register = () => (
  <Fragment>
    <span>TRY TEXTPEDIA</span>
    <h1>SIGN UP</h1>

    <form className="form">
      <div class="field">
        <label class="label has-text-primary">Phone Number</label>
        <div class="control">
          <input class="input" type="number" placeholder="Phone Number" />
        </div>
        {/* <p class="help">This is a help text</p> */}
      </div>
      <div class="field">
        <label class="label has-text-primary">Email Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email Address" />
        </div>
        {/* <p class="help">This is a help text</p> */}
      </div>
      <div className="field ">
        <div className="control">
          <button type="submit" className="button is-primary">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </Fragment>
);

export default Register;

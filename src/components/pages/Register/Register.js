import React, { Component, Fragment } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// A X I O S
import API from "../../../api/api";

import "./Register.css";
import Button from "../../common/Button/Button";

class Register extends Component {
  state = {
    phone: '',
    email: ''
  }

  handleChangle = (e) => {
    const {value, name } = e.target;
    this.setState({
      [name] : value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    //submit form
    const { phone, email } = this.state;
    let data = {
      data: {
        phoneNumber: phone,
        email
      }
    };
    //post form data
    API.post('submit', data)
    .then(result => {
      this.props.history.push({
        pathname: '/confirmation',
        state: { result: result.data.jwt }
      });
    })
    .catch(err => {
      if (err.response.status === 409) {
        this.setState({ error: err.response.data })
      } else {
        this.setState({ error: 'Ops... error occured' })
      }
      this.setState({ show: false });
    });
  }

  render() {
    const { email, phone } = this.state;
    return (
      <Fragment>
        <span>TRY TEXTPEDIA</span>
        <h1>SIGN UP</h1>

        <form className="form" onSubmit = { this.handleFormSubmit }>
          <div className="field">
            <label className="label has-text-primary">Phone Number</label>
            <div className="control">
              <PhoneInput 
                className="input"
                name="phone"
                placeholder="Enter phone number"
                value={ phone}
                onChange={ phone => this.setState({ phone })}/>
            </div>
            {/* <p class="help">This is a help text</p> */}
          </div>
          <div className="field">
            <label className="label has-text-primary">Email Address</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                value = { email }
                onChange = { this.handleChangle }
              />
            </div>
            {/* <p class="help">This is a help text</p> */}
          </div>
          <div className="field ">
            <div className="control">
              {/* reuseable component */}
              <Button className="is-primary ">Sign Up</Button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Register;

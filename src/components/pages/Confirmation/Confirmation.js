import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "react-phone-number-input/style.css";

// A X I O S
import API from "../../../api/api";

import "./Confirmation.css";
import Button from "../../common/Button/Button";
import { validateToken } from "../../../utils";

class Confirmation extends Component {
  state = {
    token: '',
    errors: {
      token : {
        value: false,
        touched: false
      }
    },
    isLoading: false
  }

  handleChangle = (e) => {
    const { value, name } = e.target;
    // validate email
    if (name === "token") {
      const tokenIsValid = validateToken(value);
      this.setState(prevState => {
        return {
          [name]: value,
          errors: {
            ...prevState.errors,
            token: {
              ...prevState.errors.token,
              touched: true,
              value: tokenIsValid
            }
          }
        }
      });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    //submit form
    const jwt = this.props.location.state ? this.props.location.state.result : '';
    const { token } = this.state;

    let data = {
      data: {
        jwt,
        token: token
      }
    };
    //show Loader 
    this.setState({
      isLoading: true
    });
    //post form data
    API.post('confirm', data)
      .then(result => {
        this.props.history.push({
          pathname: '/success',
          state: { result: result.data }
        });
        // Hide loader
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        alert(err.response.data);
        // Hide loader
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { token, errors, isLoading } = this.state;
    const jwt = this.props.location.state && this.props.location.state.result;
    //Redirect if no JWT is supplied.....
    if (!jwt) {
      return <Redirect to="/register"/>
    }
    return (
      <Fragment>
        <span>TRY TEXTPEDIA</span>
        <h1>VERIFICATION</h1>
        <p>We have sent you an email with your auth token.</p>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label has-text-primary">Token</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="token"
                placeholder="Enter Auth Token"
                value={token}
                onChange={this.handleChangle}
              />
            </div>
            {!errors.token.value && errors.token.touched && <p className="help has-text-danger">Invalid Token Supplied</p>}                        
          </div>
          
          <div className="field ">
            <div className="control">
              {/* reuseable component */}
              <Button className={"is-primary "+ (isLoading ? "is-loading" : " ")} disabled={!errors.token.value && errors.token.touched }>Submit Token</Button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Confirmation;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.scss';
import BlockMobile from '../BlockMobile/BlockMobile';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      isWaitingDevice: false,
      email: '',
      password: ''
    };
  }

  _handleChange = ev => {
    const changingState = ev.target.name;
    this.setState({ [changingState]: ev.target.value });
  };

  _handleSubmit = ev => {
    const { email, password } = this.state;
    const { signinUser } = this.props;
    ev.preventDefault();

    const userData = { email, password };
    signinUser(userData);

    if (email && password) {
      this.setState({ isWaitingDevice: true });
    }
  };

  render = () => {
    const { isMobileDevice, isBlockMobile } = this.props;
    const { isWaitingDevice } = this.state;

    return isBlockMobile ? (
      <BlockMobile />
    ) : isWaitingDevice ? (
      <div className="Wait">
        <div className="wait-text">Waiting for a pilot . . . .</div>
      </div>
    ) : (
      <div className="Signin">
        <form className="signin-box" onSubmit={this._handleSubmit}>
          <div className="main-logo">1984</div>
          <input
            className="email-box"
            type="text"
            name="email"
            placeholder="Type email code"
            onChange={this._handleChange}
          />
          <input
            className="password-box"
            type="password"
            name="password"
            placeholder="Type secret code"
            onChange={this._handleChange}
          />
          <input className="submit-box" type="submit" value="Start!" />
          {!isMobileDevice && (
            <Link to="/signup" className="signup-box">
              Get in the boot camp
            </Link>
          )}
        </form>
      </div>
    );
  };
}

export default Signin;

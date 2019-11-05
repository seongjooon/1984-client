import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wait from './Wait';
import './Signin.scss';

class Signin extends Component {
  constructor(props) {
    super(props);
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

  _handleSignout = () => {
    const { signoutUser } = this.props;
    signoutUser();
  };

  render() {
    const { isWaitingDevice } = this.state;

    return isWaitingDevice ? (
      <Wait />
    ) : (
      <>
        <h1 className='signin-header'>Sign in</h1>
        <div className='signin-box'>
          <form onSubmit={this._handleSubmit}>
            <div className='email-text'>Email</div>
            <input
              className='input-email-box'
              type='text'
              name='email'
              placeholder='입력해주세요.'
              onChange={this._handleChange}
            />
            <div className='password-text'>Password</div>
            <input
              className='input-password-box'
              type='password'
              name='password'
              placeholder='입력해주세요.'
              onChange={this._handleChange}
            />
            <Link to='/signup' className='signup-box'>
              Get in the boot camp
            </Link>
            <input className='submit-box' type='submit' value='Start!' />
          </form>
          <button
            className='signout-box'
            value='Sign out'
            onClick={this._handleSignout}
          >
            Get off
          </button>
        </div>
      </>
    );
  }
}

export default Signin;

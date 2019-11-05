import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  _handleSignout = () => {
    const { signoutUser } = this.props;
    signoutUser();
  };

  render() {
    return (
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
              Sign up
            </Link>
            <input className='submit-box' type='submit' value='Sign in' />
          </form>
          <button
            className='signout-box'
            value='Sign out'
            onClick={this._handleSignout}
          >Sign out</button>
        </div>
      </>
    );
  }
}

export default Signin;

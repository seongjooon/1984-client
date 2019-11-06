import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    const { isWaitingDevice } = this.state;

    return !isWaitingDevice ? (
      <div className='Wait'>
        <div className='wait-text'>Waiting for a pilot . . . .</div>
      </div>
    ) : (
      <div className='Signin'>
        <form className='signin-box' onSubmit={this._handleSubmit}>
          <div className='main-text'>1984</div>
          <input
            className='email-box'
            type='text'
            name='email'
            placeholder='Email Code..'
            onChange={this._handleChange}
          />
          <input
            className='password-box'
            type='password'
            name='password'
            placeholder='Secret Code..'
            onChange={this._handleChange}
          />
          <input className='submit-box' type='submit' value='Start!' />
          <Link to='/signup' className='signup-box'>
            Get in the boot camp
          </Link>
        </form>
      </div>
    );
  }
}

export default Signin;

import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  _handleChange = ev => {
    const changingState = ev.target.name;
    this.setState({ [changingState]: ev.target.value });
  };

  _handleSubmit = ev => {
    const { nickname, email, password, passwordConf } = this.state;
    const { signupUser } = this.props;
    ev.preventDefault();

    const userData = { nickname, email, password, passwordConf };
    signupUser(userData);
  };

  render() {
    return (
      <div className='Signup'>
        <form className='signup-box' onSubmit={this._handleSubmit}>
          <div className='signup-header'>New Pilot</div>
          <input
            className='input-nickname-box'
            type='text'
            name='nickname'
            placeholder='Nickname..'
            onChange={this._handleChange}
          />
          <input
            className='input-email-box'
            type='text'
            name='email'
            placeholder='Email..'
            onChange={this._handleChange}
          />
          <input
            className='input-password-box'
            type='password'
            name='password'
            placeholder='Secret Code..'
            onChange={this._handleChange}
          />
          <input
            className='input-password-box'
            type='password'
            name='password-conf'
            placeholder='Check Secret Code..'
            onChange={this._handleChange}
          />
          <input className='submit-box' type='submit' value='Get in' />
        </form>
      </div>
    );
  }
}

export default Signup;

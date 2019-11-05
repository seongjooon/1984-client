import React, { Component } from 'react';

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
      <>
        <h1 className='signin-header'>Sign up</h1>
        <form onSubmit={this._handleSubmit}>
          <div className='nickname-text'>Nickname</div>
          <input
            className='input-nickname-box'
            type='text'
            name='nickname'
            placeholder='입력해주세요.'
            onChange={this._handleChange}
          />
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
          <div className='password-text'>Check password</div>
          <input
            className='input-password-box'
            type='password'
            name='password-conf'
            placeholder='입력해주세요.'
            onChange={this._handleChange}
          />
          <input className='submit-box' type='submit' value='Sign up' />
        </form>
      </>
    );
  }
}

export default Signup;

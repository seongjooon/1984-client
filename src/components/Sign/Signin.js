import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.scss';
import RerenderButton from './rerender_button.png'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlockScreen: true,
      isRerenderClicked: false,
      isWaitingDevice: false,
      email: '',
      password: ''
    };
  }

  componentDidMount = () => {
    const checkIsMobileDevice =
      window.innerWidth < 460;
    this.props.onLoad(checkIsMobileDevice);
    this.setState({ showBlockScreen: checkIsMobileDevice });
  };

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

  _handleClick = () => {
    this.setState({ isRerenderClicked: true });
    setTimeout(() => {
      const checkIsMobileDevice = window.innerHeight > 460;
      this.setState({ showBlockScreen: checkIsMobileDevice });
    }, 800);
  };

  _showBolckMobileScreen = () => {
    const { isRerenderClicked } = this.state;
    return (
      <div className="block-mobile-screen">
        <div className="rerender-text">가로모드에서 눌러주세요</div>
        <img
          className={`rerender-button ${isRerenderClicked ? 'rotating' : ''}`}
          onClick={this._handleClick}
          alt="rerender button"
          src={RerenderButton}
        />
      </div>
    );
  };

  render = () => {
    const { isMobileDevice } = this.props;
    const { isWaitingDevice, showBlockScreen } = this.state;

    return isWaitingDevice ? (
      <div className='Wait'>
        <div className='wait-text'>Waiting for a pilot . . . .</div>
      </div>
    ) : showBlockScreen ? (
      this._showBolckMobileScreen()
    ) : (
      <div className='Signin'>
        <form className='signin-box' onSubmit={this._handleSubmit}>
          <div className='main-logo'>1984</div>
          <input
            className='email-box'
            type='text'
            name='email'
            placeholder='Type email code'
            onChange={this._handleChange}
          />
          <input
            className='password-box'
            type='password'
            name='password'
            placeholder='Type secret code'
            onChange={this._handleChange}
          />
          <input className='submit-box' type='submit' value='Start!' />
          {!isMobileDevice && (
            <Link to='/signup' className='signup-box'>
              Get in the boot camp
            </Link>
          )}
        </form>
      </div>
    );
  };
}

export default Signin;

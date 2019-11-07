import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Sign/Signup';
import Signin from './Sign/Signin';
import Game from './Game/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isReloadClicked: false };
  }

  componentDidMount = () => {
    const checkIsMobileDevice = window.innerWidth < 460;

    this.props.onLoad(checkIsMobileDevice);
  };

  _handleClick = () => {
    this.setState({ isReloadClicked: true });
    setTimeout(() => window.location.reload(), 1000);
  };

  render = () => {
    const {
      isMobileDevice,
      createUser,
      signinUser,
      signoutUser,
      hasDevice
    } = this.props;
    const { isReloadClicked } = this.state;

    return (
      <div className='App'>
        {isMobileDevice ? (
          <div className='block-mobile-screen'>
            <div className='reload-text'>
              가로화면에서 <br />
              <img
                className={`reload-button ${isReloadClicked ? 'rotating' : ''}`}
                onClick={this._handleClick}
                alt='reload button'
                src='https://loading.io/spinners/flat-reload/index.flat-ajax-syncing-loading-icon.png'
              />
              <br />
              눌러주세요.
            </div>
          </div>
        ) : (
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route
              exact
              path='/signup'
              render={() => <Signup signupUser={createUser} />}
            />
            <Route
              exact
              path='/home'
              render={() =>
                hasDevice ? (
                  <Game isMobileDevice={isMobileDevice} />
                ) : (
                  <Signin
                    isMobileDevice={isMobileDevice}
                    signinUser={signinUser}
                    signoutUser={signoutUser}
                  />
                )
              }
            />
          </Switch>
        )}
      </div>
    );
  };
}

export default App;

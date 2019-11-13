import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Sign/Signup';
import Signin from './Sign/Signin';
import Game from './Game/Game';

class App extends Component {
  render = () => {
    const {
      onLoad,
      isMobileDevice,
      createUser,
      signinUser,
      signoutUser,
      hasAnotherDevice,
      clickStartButton,
      isGameStarted,
      clickDirectionButton,
      airplane,
      obstacles,
      changeObstaclePosition
    } = this.props;

    return (
      <div className='App'>
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
              !hasAnotherDevice ? (
                <Game
                  onLoad={onLoad}
                  onClickStartButton={clickStartButton}
                  isMobileDevice={isMobileDevice}
                  isGameStarted={isGameStarted}
                  clickDirectionButton={clickDirectionButton}
                  airplane={airplane}
                  obstacles={obstacles}
                  changeObstaclePosition={changeObstaclePosition}
                />
              ) : (
                <Signin
                  onLoad={onLoad}
                  isMobileDevice={isMobileDevice}
                  signinUser={signinUser}
                  signoutUser={signoutUser}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  };
}

export default App;

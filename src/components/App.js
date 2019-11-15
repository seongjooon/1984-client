import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Sign/Signup';
import Signin from './Sign/Signin';
import Game from './Game/Game';

class App extends Component {
  componentDidMount() {
    const { onLoad, blockMobileScreen } = this.props;
    const checkIsMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    onLoad(checkIsMobileDevice);
    if (checkIsMobileDevice === (window.innerHeight > window.innerWidth)) {
      blockMobileScreen(checkIsMobileDevice);
    }
    window.addEventListener('orientationchange', () => {
      if (checkIsMobileDevice === (window.innerHeight < window.innerWidth)) {
        blockMobileScreen(true);
      } else {
        blockMobileScreen(false);
      }
    });
  }

  render = () => {
    const {
      onLoad,
      isMobileDevice,
      isBlockMobile,
      createUser,
      signinUser,
      signoutUser,
      hasAnotherDevice,
      clickStartButton,
      isGameStarted,
      clickDirectionButton,
      airplane,
      obstacles,
      changeObstaclePosition,
      gameOver,
      isGameOver,
      openRankingPage,
      isRankingOpened,
      clickRestartButton
    } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route
            exact
            path="/signup"
            render={() => <Signup signupUser={createUser} />}
          />
          <Route
            exact
            path="/home"
            render={() =>
              hasAnotherDevice ? (
                <Game
                  onLoad={onLoad}
                  isBlockMobile={isBlockMobile}
                  onClickStartButton={clickStartButton}
                  isMobileDevice={isMobileDevice}
                  isGameStarted={isGameStarted}
                  clickDirectionButton={clickDirectionButton}
                  airplane={airplane}
                  obstacles={obstacles}
                  changeObstaclePosition={changeObstaclePosition}
                  gameOver={gameOver}
                  isGameOver={isGameOver}
                  openRankingPage={openRankingPage}
                  isRankingOpened={isRankingOpened}
                  clickRestartButton={clickRestartButton}
                />
              ) : (
                <Signin
                  onLoad={onLoad}
                  isMobileDevice={isMobileDevice}
                  isBlockMobile={isBlockMobile}
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

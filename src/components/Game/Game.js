import React, { Component } from 'react';
import './Game.scss';
import GameMobileView from '../Mobile/GameMobileView';
import GameWebView from '../Web/GameWebView';
import StartButton from './start_button.png';

class Game extends Component {
  constructor() {
    super();
    this.intervalFallingObstacle = null;
    this.state = { isClear: false };
  }
  componentDidMount() {
    const { changeObstaclePosition } = this.props;

    this.intervalFallingObstacle = setInterval(changeObstaclePosition, 50);
  }

  _clearObstacleInterval = () => {
    clearInterval(this.intervalFallingObstacle);
  };

  _handleClick = () => {
    const { onLoad, onClickStartButton } = this.props;
    const checkIsMobileDevice = window.innerHeight < 460;

    onLoad(checkIsMobileDevice);
    onClickStartButton(true);
  };

  render = () => {
    const {
      isMobileDevice,
      isGameStarted,
      clickDirectionButton,
      airplane,
      obstacles,
      gameOver,
      isGameOver,
      openRankingPage,
      isRankingOpened
    } = this.props;

    return (
      <div className="Game">
        {!isGameStarted ? (
          isMobileDevice ? (
            <GameMobileView
              onClickDirectionButton={clickDirectionButton}
              isGameOver={isGameOver}
              openRankingPage={openRankingPage}
            />
          ) : (
            <GameWebView
              airplane={airplane}
              obstacles={obstacles}
              gameOver={gameOver}
              isRankingOpened={isRankingOpened}
              clearObstacleInterval={this._clearObstacleInterval}
            />
          )
        ) : (
          <img
            className="start-button"
            onClick={this._handleClick}
            alt="start button"
            src={StartButton}
          />
        )}
      </div>
    );
  };
}

export default Game;

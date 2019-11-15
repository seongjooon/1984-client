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

    this.intervalFallingObstacle = setInterval(changeObstaclePosition, 100);
  }

  _clearObstacleInterval = () => {
    clearInterval(this.intervalFallingObstacle);
  };

  _handleClick = () => {
    const { onClickStartButton } = this.props;

    onClickStartButton(true);
  };

  render = () => {
    const {
      isMobileDevice,
      isBlockMobile,
      isGameStarted,
      clickDirectionButton,
      airplane,
      obstacles,
      gameOver,
      isGameOver,
      openRankingPage,
      isRankingOpened,
      clickRestartButton
    } = this.props;

    return (
      <div className="Game">
        {isGameStarted ? (
          isMobileDevice ? (
            <GameMobileView
              isBlockMobile={isBlockMobile}
              onClickDirectionButton={clickDirectionButton}
              isGameOver={isGameOver}
              openRankingPage={openRankingPage}
              clickRestartButton={clickRestartButton}
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

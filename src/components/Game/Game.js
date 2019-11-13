import React, { Component } from 'react';
import './Game.scss';
import GameMobileView from '../Mobile/GameMobileView';
import GameWebView from '../Web/GameWebView';

class Game extends Component {
  componentDidMount() {
    const { changeObstaclePosition } = this.props;

    setInterval(changeObstaclePosition, 50);
  }

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
      isGameOver
    } = this.props;

    return (
      <div className="Game">
        {isGameStarted ? (
          isMobileDevice ? (
            <GameMobileView
              onClickDirectionButton={clickDirectionButton}
              isGameOver={isGameOver}
            />
          ) : (
            <GameWebView
              airplane={airplane}
              obstacles={obstacles}
              gameOver={gameOver}
            />
          )
        ) : (
          <img
            className="start-button"
            onClick={this._handleClick}
            alt="start button"
            src="https://cdn.onlinewebfonts.com/svg/img_488970.png"
          />
        )}
      </div>
    );
  };
}

export default Game;

import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
  _handleClick = () => {
    const { onLoad, onClickStartButton } = this.props;
    const checkIsMobileDevice = window.innerHeight < 460;

    onLoad(checkIsMobileDevice);
    onClickStartButton(true);
  };

  render() {
    const { isMobileDevice, isGameStarted } = this.props;

    return (
      <div className='Game'>
        {isGameStarted ? (
          isMobileDevice ? (
            <div className='airplane-handler'>
              <div className='left-button'>left</div>
              <div className='right-button'>right</div>
            </div>
          ) : (
            <div>WEB</div>
          )
        ) : (
          <img
            className='start-button'
            onClick={this._handleClick}
            alt='start button'
            src='https://cdn.onlinewebfonts.com/svg/img_488970.png'
          />
        )}
      </div>
    );
  }
}

export default Game;

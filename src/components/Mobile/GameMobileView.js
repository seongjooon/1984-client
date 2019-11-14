import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameMobileView.scss';

class GameMobileView extends Component {
  constructor() {
    super();
    this.state = {
      isLeftButtonClicked: false,
      isRightButtonClicked: false
    };
  }

  _getSelectedVoice = (direction, selectedButton) => {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1.35;
    speech.pitch = 1;
    if (selectedButton === 'direction') {
      speech.text = direction === 'Left' ? 'left' : 'right';
    } else if (selectedButton === 'result') {
      speech.text = direction === 'Left' ? 'restart' : 'ranking';
    }

    window.speechSynthesis.speak(speech);
  };

  _handleDirectionButtonClick = direction => {
    const { onClickDirectionButton } = this.props;

    onClickDirectionButton(direction);
    this._getSelectedVoice(direction, 'direction');
    this.setState({ [`is${direction}ButtonClicked`]: true });
    setTimeout(
      () => this.setState({ [`is${direction}ButtonClicked`]: false }),
      70
    );
  };

  _handleResultButtonClick = direction => {
    const { openRankingPage } = this.props;
    this._getSelectedVoice(direction, 'result');
    if (direction === 'Right') {
      openRankingPage();
    }

    this.setState({ [`is${direction}ButtonClicked`]: true });
    setTimeout(
      () => this.setState({ [`is${direction}ButtonClicked`]: false }),
      70
    );
  };

  render = () => {
    const { isGameOver } = this.props;
    const { isLeftButtonClicked, isRightButtonClicked } = this.state;

    return (
      <div className="mobile-buttons">
        {isGameOver ? (
          <>
            <Link
              to="/home"
              className={`button restart-button ${
                isLeftButtonClicked ? 'flicker' : ''
              }`}
              onMouseDown={() => this._handleResultButtonClick('Left')}
            >
              Restart
            </Link>
            <div
              className={`button ranking-button ${
                isRightButtonClicked ? 'flicker' : ''
              }`}
              onMouseDown={() => this._handleResultButtonClick('Right')}
            >
              Ranking
            </div>{' '}
          </>
        ) : (
          <>
            <div
              className={`button left-button ${
                isLeftButtonClicked ? 'flicker' : ''
              }`}
              onMouseDown={() => this._handleDirectionButtonClick('Left')}
            >
              L
            </div>
            <div
              className={`button right-button ${
                isRightButtonClicked ? 'flicker' : ''
              }`}
              onMouseDown={() => this._handleDirectionButtonClick('Right')}
            >
              R
            </div>
          </>
        )}
      </div>
    );
  };
}

export default GameMobileView;

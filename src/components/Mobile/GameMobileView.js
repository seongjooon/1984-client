import React, { Component } from 'react';

class GameMobileView extends Component {
  constructor() {
    super();
    this.state = {
      isLeftDirectionClicked: false,
      isRightDirectionClicked: false
    };
  }

  _handleClick = direction => {
    const { onClickDirectionButton } = this.props;
    onClickDirectionButton(direction);

    const speech = new SpeechSynthesisUtterance();
    speech.text = direction === 'Left' ? '왼쪽' : '오른쪽';
    speech.volume = 1;
    speech.rate = 1.3;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    this.setState({ [`is${direction}DirectionClicked`]: true });
    setTimeout(
      () => this.setState({ [`is${direction}DirectionClicked`]: false }),
      70
    );
  };

  render = () => {
    const { isLeftDirectionClicked, isRightDirectionClicked } = this.state;
    return (
      <div className='airplane-handler'>
        <div
          className={`left-button ${isLeftDirectionClicked ? 'flicker' : ''}`}
          onClick={() => this._handleClick('Left')}
        >
          L
        </div>
        <div
          className={`right-button ${isRightDirectionClicked ? 'flicker' : ''}`}
          onClick={() => this._handleClick('Right')}
        >
          R
        </div>
      </div>
    );
  };
}

export default GameMobileView;

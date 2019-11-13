import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  render = () => {
    const { score } = this.props;

    return (
      <div className="modals-background">
        <div className="modal-body">
          <div className="score-box">
            <div className="score-text">Your Score </div>
            <div className="score-number">{score}</div>
          </div>
          <div className="guid-box">
            <div className="sample-phone">
              <div className="guid-buttons">
                <div className="restart-text">
                  Restart
                  <img
                    className="push-image"
                    alt="push"
                    src="https://www.denacopy.be/mobile/images/touchscreen.gif"
                  />
                </div>

                <div className="ranking-text">
                  Ranking
                  <img
                    className="push-image"
                    alt="push"
                    src="https://www.denacopy.be/mobile/images/touchscreen.gif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Modal;

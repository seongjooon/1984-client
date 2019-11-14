import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Modal.scss';
import Finger from './pressing_finger.gif';

class Modal extends Component {
  render = () => {
    const { score, isRankingOpened } = this.props;

    return (
      <div className="modals-background">
        <div className="modal-body">
          {isRankingOpened ? (
            <div className="ranking-box">Ranking</div>
          ) : (
            <div className="score-box">
              <div className="score-text">Your Score </div>
              <div className="score-number">
                <CountUp start={0} end={score} />
              </div>
            </div>
          )}
          <div className="guid-box">
            <div className="sample-phone">
              <div className="guid-buttons">
                <div className="restart-text">
                  Restart
                  <img className="push-image" alt="push" src={Finger} />
                </div>

                <div className="ranking-text">
                  Ranking
                  <img className="push-image" alt="push" src={Finger} />
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

import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Modal.scss';
import Finger from './pressing_finger.gif';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      rankingList: [
        ['hanjuneyang', 2000],
        ['eeroo', 1998],
        ['nohdack', 1887],
        ['ericimhojang', 1000],
        ['dongdong', 999],
        ['jy.kang', 897]
      ]
    };
  }
  render = () => {
    const { score, isRankingOpened } = this.props;
    const { rankingList } = this.state;

    return (
      <div className="modals-background">
        <div className="modal-body">
          {isRankingOpened ? (
            <div className="ranking-box">
              <div className="ranking-main">Ranking</div>
              <div className="user-data-box">
                {rankingList.map(user => (
                  <div className="user-data">
                    <div className="user-nickname">{user[0]}</div>
                    <div className="user-score">{user[1]}</div>
                  </div>
                ))}
              </div>
            </div>
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

import React, { Component } from 'react';
import './GameWebView.scss';
import CountUp from 'react-countup';
import { TiPlaneOutline } from 'react-icons/ti';
import { FaGitkraken } from 'react-icons/fa';
import { FaEarlybirds } from 'react-icons/fa';

class GameWebView extends Component {
  constructor() {
    super();
    this.state = { obstacleController: 0 };
  }

  _fallingObstacle = obbstacleUnit => {
    let { obstacleController } = this.state;
    if (obstacleController <= 938) {
      setInterval(() => {
        obstacleController += 100;
        this.setState({ obstacleController });
      }, 1500);
    }

    return (
      <div className='obstacle-unit'>
        <div
          className='obstacle-controller'
          style={{ height: `${obstacleController}px` }}
        ></div>
        {obbstacleUnit}
      </div>
    );
  };

  _countUpNumber = () => {
    return <CountUp className='count-up' start={0} end={1000} duration={100} />;
  };

  render = () => {
    const { airplanePosition } = this.props;

    return (
      <div className='web-game-view'>
        <div className='main-logo'>1984</div>
        <div className='main-viewer'>
          {this._fallingObstacle(<FaGitkraken className='git-kraken' />)}
          {this._fallingObstacle(<FaEarlybirds className='git-kraken' />)}
          <div className='airplane-area'>
            <div
              className='airplane-controller'
              style={{ width: `${airplanePosition}%` }}
            ></div>
            <TiPlaneOutline className='airplane' />
          </div>
        </div>
        <div className='count-up-box'>{this._countUpNumber()}</div>
      </div>
    );
  };
}

export default GameWebView;

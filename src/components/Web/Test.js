import React, { Component } from 'react';
import './GameWebView.scss';
import Obstacle from './Obstacle';
import CountUp from 'react-countup';
import { TiPlaneOutline } from 'react-icons/ti';

class GameWebView extends Component {
  constructor() {
    super();
    this.state = { obstacles: [] };
    this.obstaclesRef = React.createRef();
  }

  componentDidMount = () => {
    // setInterval(() => {
    const { obstacles } = this.state;
    this.setState({
      obstacles: obstacles.concat([<Obstacle remove={this._removeObstacle} />])
    });
    // }, 1000);
  };

  _removeObstacle = () => {
    const { obstacles } = this.state;
    const obstacleBox = this.obstaclesRef.current;

    obstacleBox.remove();
    this.setState({
      obstacles: obstacles.concat([<Obstacle remove={this._removeObstacle} />])
    });
  };

  _countUpNumber = () => {
    return (
      <CountUp className='count-up' start={0} end={10000} duration={8000} />
    );
  };

  render = () => {
    const { airplanePosition } = this.props;
    const { obstacles } = this.state;

    return (
      <div className='web-game-view'>
        <div className='main-logo'>1984</div>
        <div className='main-viewer'>
          <div className='obstacle-box'>
            {obstacles.map((obs, index) => (
              <div
                className='obstacle-unit'
                ref={this.obstaclesRef}
                key={index}
              >
                {obs}
              </div>
            ))}
          </div>
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

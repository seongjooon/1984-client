import React, { Component } from 'react';
import './GameWebView.scss';
// import Obstacle from './Obstacle';
import CountUp from 'react-countup';
// import { TiPlaneOutline } from 'react-icons/ti';

class GameWebView extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount = () => {
    const { airplane } = this.props;
    this.ctx = this.canvasRef.current.getContext('2d');
    this._updateGameArea(airplane);
    // const { airplane } = this.props;
    // setInterval(() => {
    //   this._updateGameArea(airplane);
    // }, 20);
  };

  componentDidUpdate() {
    const { airplane } = this.props;
    this._updateGameArea(airplane);
  }

  _clear = () => {
    this.ctx.clearRect(0, 0, 100, 500);
  };

  _update(obstacle) {
    this.ctx.fillStyle = obstacle.color;

    this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }

  _updateGameArea = airplane => {
    this._clear();
    this._update(airplane);
  };

  _countUpNumber = () => {
    return (
      <CountUp className='count-up' start={0} end={10000} duration={8000} />
    );
  };

  render = () => {
    return (
      <div className='web-game-view'>
        <div className='main-logo'>1984</div>
        <canvas
          className='main-viewer'
          ref={this.canvasRef}
          width={'100%'}
          height={'100%'}
        />
        <div className='count-up-box'>{this._countUpNumber()}</div>
      </div>
    );
  };
}

export default GameWebView;

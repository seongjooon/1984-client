import React, { Component } from "react";
import "./GameWebView.scss";
// import Obstacle from './Obstacle';
import CountUp from "react-countup";
// import { TiPlaneOutline } from 'react-icons/ti';

class GameWebView extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.ctx = null;
    this.interval = null;
  }

  componentDidMount() {
    const { airplane, obstacle } = this.props;
    this.ctx = this.canvasRef.current.getContext("2d");
    this._updateGameArea([airplane, obstacle]);
  }

  componentDidUpdate() {
    const { airplane, obstacle } = this.props;
    this._updateGameArea([airplane, obstacle]);
  }

  _clear = () => {
    this.ctx.clearRect(0, 0, 100, 500);
  };

  _update = unit => {
    this.ctx.fillStyle = unit.color;

    this.ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
  };

  _stopGame = () => {
    clearInterval(this.interval);
  };
  pr;

  _updateGameArea = unitList => {
    this._clear();

    for (let i = 0; i < unitList.length; i++) {
      this._update(unitList[i]);
    }
  };

  _countUpNumber = () => {
    return (
      <CountUp className="count-up" start={0} end={10000} duration={8000} />
    );
  };

  render = () => {
    return (
      <div className="web-game-view">
        <div className="main-logo">1984</div>
        <canvas
          className="main-viewer"
          ref={this.canvasRef}
          width={"100%"}
          height={"100%"}
        />
        <div className="count-up-box">{this._countUpNumber()}</div>
      </div>
    );
  };
}

export default GameWebView;

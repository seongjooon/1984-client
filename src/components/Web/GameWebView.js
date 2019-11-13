import React, { Component } from 'react';
import './GameWebView.scss';
import CountUp from 'react-countup';

class GameWebView extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.scoreRef = React.createRef();
    this.ctx = null;
    this.state = { score: 0 };
  }

  componentDidMount() {
    const { airplane, obstacles } = this.props;

    this.ctx = this.canvasRef.current.getContext('2d');
    this._updateGame([airplane, ...obstacles]);
  }

  componentDidUpdate() {
    const { airplane, obstacles } = this.props;

    this._updateGame([airplane, ...obstacles]);
  }

  _clearCanvas = () => {
    this.ctx.clearRect(0, 0, 100, 500);
  };

  _update = unit => {
    this.ctx.fillStyle = unit.color;
    this.ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
  };

  _crashWith = unitList => {
    const myleft = unitList[0].x;
    const myright = unitList[0].x + unitList[0].width;
    const mytop = unitList[0].y;
    const mybottom = unitList[0].y + unitList[0].height;
    const otherleft = unitList[1].x;
    const otherright = unitList[1].x + unitList[1].width;
    const othertop = unitList[1].y;
    const otherbottom = unitList[1].y + unitList[1].height;
    let crash = true;

    if (
      mybottom <= othertop ||
      mytop >= otherbottom ||
      myright <= otherleft ||
      myleft >= otherright
    ) {
      crash = false;
    }
    return crash;
  };

  _stopGame = () => {
    const score = this.scoreRef.current.firstElementChild.innerText;
    alert(`ur score ${score}`);
  };

  _updateGame = unitList => {
  
    this._clearCanvas();

    for (let i = 0; i < unitList.length; i++) {
      this._update(unitList[i]);
    }
  };

  render = () => {
    return (
      <div className="web-game-view">
        <div className="main-logo">1984</div>
        <canvas
          className="main-viewer"
          ref={this.canvasRef}
          width={'100%'}
          height={'100%'}
        />
        <div className="count-up-box" ref={this.scoreRef}>
          <CountUp className="count-up" start={0} end={10000} duration={8000} />
        </div>
      </div>
    );
  };
}

export default GameWebView;

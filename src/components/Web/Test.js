// import React, { Component } from 'react';
// import './GameWebView.scss';
// // import Obstacle from './Obstacle';
// import CountUp from 'react-countup';
// // import { TiPlaneOutline } from 'react-icons/ti';

// class GameWebView extends Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//     this.ctx = null;
//     this.interval = null;
//   }

//   componentDidMount() {
//     const { airplane, obstacle } = this.props;
//     this.ctx = this.canvasRef.current.getContext('2d');
//     // this.interval = setInterval(() => {
//       this._updateGameArea([airplane, obstacle]);
//     // }, 20);
//   }

//   componentDidUpdate() {
//     const { airplane } = this.props;
//     this._updateGameArea(airplane);
//   }

//   _clear = () => {
//     this.ctx.clearRect(0, 0, 100, 500);
//   };

//   _update = unit => {
//     this.ctx.fillStyle = unit.color;

//     this.ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
//   };

//   _crashWith = unitList => {
//     const myleft = unitList[0].x;
//     const myright = unitList[0].x + unitList[0].width;
//     const mytop = unitList[0].y;
//     const mybottom = unitList[0].y + unitList[0].height;
//     const otherleft = unitList[1].x;
//     const otherright = unitList[1].x + unitList[1].width;
//     const othertop = unitList[1].y;
//     const otherbottom = unitList[1].y + unitList[1].height;
//     let crash = true;
//     if (
//       mybottom < othertop ||
//       mytop > otherbottom ||
//       myright < otherleft ||
//       myleft > otherright
//     ) {
//       crash = false;
//     }
//     return crash;
//   };

//   _stopGame = () => {
//     clearInterval(this.interval);
//   };

//   _updateGameArea = unitList => {
//     // if (this._crashWith(unitList)) {
//     //   this._stopGame();
//     // } else {
//       this._clear();
//       for (let i = 0; i < unitList.length; i++) {
//         this._update(unitList[i]);
//       }
//     // }
//   };

//   _countUpNumber = () => {
//     return (
//       <CountUp className='count-up' start={0} end={10000} duration={8000} />
//     );
//   };

//   render = () => {
//     return (
//       <div className='web-game-view'>
//         <div className='main-logo'>1984</div>
//         <canvas
//           className='main-viewer'
//           ref={this.canvasRef}
//           width={'100%'}
//           height={'100%'}
//         />
//         <div className='count-up-box'>{this._countUpNumber()}</div>
//       </div>
//     );
//   };
// }

// export default GameWebView;

// import React, { Component } from 'react';
// import './GameWebView.scss';
// // import Obstacle from './Obstacle';
// import CountUp from 'react-countup';
// // import { TiPlaneOutline } from 'react-icons/ti';

// class GameWebView extends Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//     this.ctx = null;
//     this.interval = null;
//   }

//   componentDidMount() {
//     const { airplane, obstacle } = this.props;
//     this.ctx = this.canvasRef.current.getContext('2d');
//     // this.interval = setInterval(() => {
//       this._updateGameArea([airplane, obstacle]);
//     // }, 20);
//   }

//   componentDidUpdate() {
//     const { airplane } = this.props;
//     this._updateGameArea(airplane);
//   }

//   _clear = () => {
//     this.ctx.clearRect(0, 0, 100, 500);
//   };

//   _update = unit => {
//     this.ctx.fillStyle = unit.color;

//     this.ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
//   };

//   _crashWith = unitList => {
//     const myleft = unitList[0].x;
//     const myright = unitList[0].x + unitList[0].width;
//     const mytop = unitList[0].y;
//     const mybottom = unitList[0].y + unitList[0].height;
//     const otherleft = unitList[1].x;
//     const otherright = unitList[1].x + unitList[1].width;
//     const othertop = unitList[1].y;
//     const otherbottom = unitList[1].y + unitList[1].height;
//     let crash = true;
//     if (
//       mybottom < othertop ||
//       mytop > otherbottom ||
//       myright < otherleft ||
//       myleft > otherright
//     ) {
//       crash = false;
//     }
//     return crash;
//   };

//   _stopGame = () => {
//     clearInterval(this.interval);
//   };

//   _updateGameArea = unitList => {
//     // if (this._crashWith(unitList)) {
//     //   this._stopGame();
//     // } else {
//       this._clear();
//       for (let i = 0; i < unitList.length; i++) {
//         this._update(unitList[i]);
//       }
//     // }
//   };

//   _countUpNumber = () => {
//     return (
//       <CountUp className='count-up' start={0} end={10000} duration={8000} />
//     );
//   };

//   render = () => {
//     return (
//       <div className='web-game-view'>
//         <div className='main-logo'>1984</div>
//         <canvas
//           className='main-viewer'
//           ref={this.canvasRef}
//           width={'100%'}
//           height={'100%'}
//         />
//         <div className='count-up-box'>{this._countUpNumber()}</div>
//       </div>
//     );
//   };
// }

// export default GameWebView;

import React, { Component } from "react";
import "./GameWebView.scss";
import CountUp from "react-countup";
import { TiPlaneOutline } from "react-icons/ti";
// import { FaEarlybirds } from "react-icons/fa";

class GameWebView extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
    this.interval = null;
    this.img = null;
  }

  componentDidMount() {
    const { airplane, obstacle } = this.props;
    this.context = this.canvasRef.current.getContext("2d");
    this._updateGameArea([airplane, obstacle]);

    // this.image = new Image();
    // this.image.src = TiPlaneOutline;
    // this.image.onload = () => {
    //   this.context.drawImage(this.image, 46, 90, 8, 7);
    // };
  }

  componentDidUpdate() {
    const { airplane, obstacle } = this.props;
    this._updateGameArea([airplane, obstacle]);
  }

  _clear = () => {
    this.context.clearRect(0, 0, 100, 500);
  };

  _update = unit => {
    this.context.fillStyle = unit.color;

    this.context.fillRect(unit.x, unit.y, unit.width, unit.height);
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
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
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

import React, { Component } from 'react';
import './GameWebView.scss';
import { TiPlaneOutline } from 'react-icons/ti';

class GameWebView extends Component {
  render = () => {
    const { airplanePosition } = this.props;

    return (
      <div className='web-game-view'>
        <div className='main-viewer'>
          <div className='airplane-area'>
            <div
              className='airplane-controller'
              style={{ width: `${airplanePosition}%` }}
            ></div>
            <TiPlaneOutline className='airplane' />
          </div>
        </div>
      </div>
    );
  };
}

export default GameWebView;

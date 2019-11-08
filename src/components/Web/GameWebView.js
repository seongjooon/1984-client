import React, { Component } from 'react';
import './GameWebView.scss';
import { TiPlaneOutline } from 'react-icons/ti';

class GameWebView extends Component {
  render = () => {
    return (
      <div className='web-game-view'>
        <div className='main-viewer'>
          <div className='airplane-area'>
            <div className='airplane-controller' style={{ width: '46%' }}></div>
            <TiPlaneOutline className='airplane' />
          </div>
        </div>
      </div>
    );
  };
}

export default GameWebView;

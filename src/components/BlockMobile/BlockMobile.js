import React, { Component } from 'react';
import './BlockMobile.scss';
import TurningPhone from './turning_phone.png';

class BlockMobile extends Component {
  constructor() {
    super();
    this.state = {
      isRerenderClicked: false
    };
  }
  render = () => {
    return (
      <div className="block-mobile-screen">
        <div className="rerender-text">가로모드만 지원합니다</div>
        <img
          className={`rerender-button rotating`}
          onClick={() => {
            this.setState({ isRerenderClicked: true });
          }}
          alt="rerender button"
          src={TurningPhone}
        />
      </div>
    );
  };
}

export default BlockMobile;

import React, { Component } from 'react';
import { FaGitkraken } from 'react-icons/fa';
// import { FaEarlybirds } from 'react-icons/fa';

class Obstacle extends Component {
  constructor() {
    super();
    this.state = { obstacleController: 0 };
  }

  componentDidMount = () => {
    this._fallingObstacle();
  };

  _fallingObstacle = () => {
    setInterval(() => {
      let { remove } = this.props;
      let { obstacleController } = this.state;

      if (obstacleController >= 700) {
        remove();
      }
      obstacleController += 100;
      this.setState({ obstacleController });
    }, 300);
  };

  render() {
    const { obstacleController } = this.state;

    return (
      <div className='obstacle-unit'>
        <div
          className='obstacle-controller'
          style={{ height: `${obstacleController}px` }}
        ></div>
        {<FaGitkraken className='git-kraken' />}
      </div>
    );
  }
}

export default Obstacle;

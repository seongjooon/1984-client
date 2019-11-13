import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';
import { gameStartReducer } from './gameStartReducer';
import { moveAirplaneReducer } from './moveAirplaneReducer';
import { moveObstacleReducer } from './moveObstacleReducer';

export const initState = {
  isMobileDevice: false,
  hasAnotherDevice: false,
  isGameStarted: false,
  airplane: {
    color: 'red',
    x: 46,
    y: 90,
    width: 8,
    height: 7
  },
  obstacles: []
};

for (let i = 0; i < 15; i++) {
  const sampleObstacle = {
    color: 'green',
    x: 1,
    y: 1,
    width: 8,
    height: 7
  };
  sampleObstacle.x *= Math.floor(Math.random() * 10) * 10;
  sampleObstacle.y *= -Math.floor(Math.random() * 10) * 10;

  initState.obstacles.push(sampleObstacle);
}

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasAnotherDevice: connectDeviceReducer,
  isGameStarted: gameStartReducer,
  airplane: moveAirplaneReducer,
  obstacles: moveObstacleReducer
});

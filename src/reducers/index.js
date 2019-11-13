import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';
import { gameStartReducer } from './gameStartReducer';
import { moveAirplaneReducer } from './moveAirplaneReducer';
import { moveObstacleReducer } from './moveObstacleReducer';
import { getRandomNumber } from '../utils';

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

const initialObstacleSize = getRandomNumber(30);

for (let i = 0; i < 8; i++) {
  const sampleObstacle = {
    color: 'green',
    x: 1,
    y: -1,
    width: initialObstacleSize / 2,
    height: initialObstacleSize / 2
  };
  sampleObstacle.x *= getRandomNumber(82);
  sampleObstacle.y *= getRandomNumber(82);

  initState.obstacles.push(sampleObstacle);
}

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasAnotherDevice: connectDeviceReducer,
  isGameStarted: gameStartReducer,
  airplane: moveAirplaneReducer,
  obstacles: moveObstacleReducer
});

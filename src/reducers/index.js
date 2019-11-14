import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { checkIsBlockMobileReducer } from './checkIsBlockMobileReducer';
import { connectDeviceReducer } from './connectDeviceReducer';
import { gameStartReducer } from './gameStartReducer';
import { moveAirplaneReducer } from './moveAirplaneReducer';
import { moveObstacleReducer } from './moveObstacleReducer';
import { gameOverReducer } from './gameOverReducer';
import { openRankingReducer } from './openRankingReducer';
import { OBSTACLE_LIST } from '../constants/constant';

export const initState = {
  isMobileDevice: false,
  isBlockMobile: false,
  hasAnotherDevice: false,
  isGameStarted: false,
  isGameOver: false,
  isRankingOpened: false,
  airplane: {
    color: 'red',
    x: 46,
    y: 90,
    width: 8,
    height: 7
  },
  obstacles: OBSTACLE_LIST
};

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  isBlockMobile: checkIsBlockMobileReducer,
  hasAnotherDevice: connectDeviceReducer,
  isGameStarted: gameStartReducer,
  airplane: moveAirplaneReducer,
  obstacles: moveObstacleReducer,
  isGameOver: gameOverReducer,
  isRankingOpened: openRankingReducer
});

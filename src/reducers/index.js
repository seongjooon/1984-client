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
import Airplane from './airplane.png';

export const initState = {
  isMobileDevice: false,
  isBlockMobile: false,
  hasAnotherDevice: false,
  isGameStarted: false,
  isGameOver: false,
  isRankingOpened: false,
  airplane: {
    src: Airplane,
    x: 1380,
    y: 2700,
    width: 300,
    height: 270
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

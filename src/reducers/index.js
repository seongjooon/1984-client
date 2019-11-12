import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';
import { gameStartReducer } from './gameStartReducer';
import { moveAirplaneReducer } from './moveAirplaneReducer';

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
  }
};

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasAnotherDevice: connectDeviceReducer,
  isGameStarted: gameStartReducer,
  airplane: moveAirplaneReducer
});

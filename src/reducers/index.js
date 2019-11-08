import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';
import { gameStartReducer } from './gameStartReducer';

export const initState = {
  isMobileDevice: false,
  hasAnotherDevice: false,
  isGameStarted: false
};

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasAnotherDevice: connectDeviceReducer,
  isGameStarted: gameStartReducer
});

import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';

export const initState = {
  isMobileDevice: false,
  hasAnotherDevice: false
};

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasAnotherDevice: connectDeviceReducer
});

import { combineReducers } from 'redux';
import { checkIsMobileDeviceReducer } from './checkIsMobileDeviceReducer';
import { connectDeviceReducer } from './connectDeviceReducer';

export const initState = {
  isMobileDevice: false,
  hasDevice: false
};

export default combineReducers({
  isMobileDevice: checkIsMobileDeviceReducer,
  hasDevice: connectDeviceReducer
});

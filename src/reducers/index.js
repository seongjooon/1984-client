import { combineReducers } from 'redux';
import { connectDeviceReducer } from './connectDeviceReducer';

export const initState = {
  hasDevice: false
};

export default combineReducers({
  hasDevice: connectDeviceReducer
});

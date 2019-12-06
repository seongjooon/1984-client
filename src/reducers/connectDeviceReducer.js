import { WAIT_DEVICE } from '../constants/actionTypes';
import { initState } from './index';

export const connectDeviceReducer = (state = initState.hasAnotherDevice, action) => {
  switch (action.type) {
    case WAIT_DEVICE:
      return action.hasAnotherDevice;
    default:
      return state;
  }
};

import { WAIT_DEVICE } from '../constants/actioncTypes';
import { initState } from './index';

export const connectDeviceReducer = (state = initState.hasDevice, action) => {
  switch (action.type) {
    case WAIT_DEVICE:
      return action.hasDevice;
    default:
      return state;
  }
};

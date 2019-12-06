import { IS_MOBILE_DEVICE } from '../constants/actionTypes';
import { initState } from './index';

export const checkIsMobileDeviceReducer = (
  state = initState.isMobileDevice,
  action
) => {
  switch (action.type) {
    case IS_MOBILE_DEVICE:
      return action.isMobileDevice;
    default:
      return state;
  }
};

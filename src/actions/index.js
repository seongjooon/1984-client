import { WAIT_DEVICE, IS_MOBILE_DEVICE } from '../constants/actioncTypes';

export const connectingDevice = hasAnotherDevice => ({
  type: WAIT_DEVICE,
  hasAnotherDevice
});

export const checkIsMobileDevice = isMobileDevice => ({
  type: IS_MOBILE_DEVICE,
  isMobileDevice
});

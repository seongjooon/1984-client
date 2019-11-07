import { WAIT_DEVICE, IS_MOBILE_DEVICE } from '../constants/actioncTypes';

export const connectingDevice = hasDevice => ({
  type: WAIT_DEVICE,
  hasDevice
});

export const checkIsMobileDevice = isMobileDevice => ({
  type: IS_MOBILE_DEVICE,
  isMobileDevice
});

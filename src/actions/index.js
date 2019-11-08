import {
  WAIT_DEVICE,
  IS_MOBILE_DEVICE,
  IS_GAME_START
} from '../constants/actioncTypes';

export const connectDeviceAction = hasAnotherDevice => ({
  type: WAIT_DEVICE,
  hasAnotherDevice
});

export const checkIsMobileDevice = isMobileDevice => ({
  type: IS_MOBILE_DEVICE,
  isMobileDevice
});

export const startGameAction = isStart => ({
  type: IS_GAME_START,
  isStart
});

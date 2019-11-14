import {
  WAIT_DEVICE,
  IS_MOBILE_DEVICE,
  IS_GAME_START,
  AIRPLANE_MOVING,
  OBSTACLE_MOVING,
  IS_GAME_OVER,
  RANKING_OPEN
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

export const moveAirplaneAction = direction => ({
  type: AIRPLANE_MOVING,
  direction
});

export const moveObstacleAction = () => ({
  type: OBSTACLE_MOVING
});

export const stopGameAction = () => ({
  type: IS_GAME_OVER
});

export const openRankingAction = () => ({
  type: RANKING_OPEN
});

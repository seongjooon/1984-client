import { OBSTACLE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';
import { FALLING_OBSTACLE } from '../constants/constant';
import { getRandomNumber } from '../utils';

export const moveObstacleReducer = (state = initState.obstacles, action) => {
  for (let i = 0; i < state.length; i++) {
    const recreatedObstacleSize = getRandomNumber(30);
    if (state[i].y >= 90) {
      state[i].y = -5;
      state[i].x = getRandomNumber(82);
      state[i].width = recreatedObstacleSize / 2;
      state[i].height = recreatedObstacleSize / 2;
    }
    state[i].y += getRandomNumber(FALLING_OBSTACLE);
  }

  switch (action.type) {
    case OBSTACLE_MOVING:
      return [...state];
    default:
      return state;
  }
};

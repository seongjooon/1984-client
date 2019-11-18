import { OBSTACLE_MOVING } from '../constants/actionTypes';
import { initState } from './index';
import { FALLING_OBSTACLE } from '../constants/constant';
import { getRandomNumber } from '../utils';

export const moveObstacleReducer = (state = initState.obstacles, action) => {
  switch (action.type) {
    case OBSTACLE_MOVING:
      for (let i = 0; i < state.length; i++) {
        const recreatedObstacleSize = getRandomNumber(30);
        if (state[i].y >= 2700) {
          state[i].y = -150;
          state[i].x = getRandomNumber(82 * 30);
          state[i].width = (recreatedObstacleSize * 30) / 2;
          state[i].height = (recreatedObstacleSize * 30) / 2;
        }
        state[i].y += getRandomNumber(FALLING_OBSTACLE) * 7;
      }
      return [...state];
    default:
      return state;
  }
};

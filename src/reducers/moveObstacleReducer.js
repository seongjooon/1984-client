import { OBSTACLE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';
import { FALLING_OBSTACLE } from '../constants/constant';

export const moveObstacleReducer = (state = initState.obstacles, action) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].y >= 90) {
      state[i].y = -5;
    }
    state[i].y += FALLING_OBSTACLE;
  }

  switch (action.type) {
    case OBSTACLE_MOVING:
      return [...state];
    default:
      return state;
  }
};

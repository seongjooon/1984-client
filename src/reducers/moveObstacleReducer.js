import { OBSTACLE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';
import { FALLING_OBSTACLE } from '../constants/constant';

export const moveObstacleReducer = (state = initState.obstacle, action) => {
  switch (action.type) {
    case OBSTACLE_MOVING:
      return { ...state, y: state.y + FALLING_OBSTACLE };
    default:
      return state;
  }
};

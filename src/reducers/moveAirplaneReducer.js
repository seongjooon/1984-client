import { AIRPLANE_MOVING } from '../constants/actionTypes';
import { initState } from './index';

export const moveAirplaneReducer = (state = initState.airplane, action) => {
  let speedX = 0;

  if (action.direction === 'Left') {
    if (state.x <= 150) {
      return { ...state, x: state.x };
    }
    speedX = state.x -= 120;
  } else if (action.direction === 'Right') {
    if (state.x >= 2700) {
      return { ...state, x: state.x };
    }
    speedX = state.x += 120;
  }

  switch (action.type) {
    case AIRPLANE_MOVING:
      return { ...state, x: speedX };
    default:
      return state;
  }
};

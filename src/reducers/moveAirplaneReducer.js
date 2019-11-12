import { AIRPLANE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';

export const moveAirplaneReducer = (state = initState.airplane, action) => {
  let speedX = 0;

  if (action.direction === 'Left') {
    if (state.x <= 5) {
      return { ...state, x: state.x };
    }
    speedX = state.x -= 4;
  } else if (action.direction === 'Right') {
    if (state.x >= 90) {
      return { ...state, x: state.x };
    }
    speedX = state.x += 4;
  }

  switch (action.type) {
    case AIRPLANE_MOVING:
      return { ...state, x: speedX };
    default:
      return state;
  }
};

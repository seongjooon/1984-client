import { AIRPLANE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';

export const moveAirplaneReducer = (state = initState.airplane, action) => {
  if (action.direction === 'Left') {
    if (state.x <= 5) {
      return Object.create(state);
    }
    state.x -= 4;
  } else if (action.direction === 'Right') {
    if (state.x >= 90) {
      return Object.create(state);
    }
    state.x += 4;
  }

  switch (action.type) {
    case AIRPLANE_MOVING:
      return Object.create(state);
    default:
      return state;
  }
};

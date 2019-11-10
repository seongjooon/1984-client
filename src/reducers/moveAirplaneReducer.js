import { AIRPLANE_MOVING } from '../constants/actioncTypes';
import { initState } from './index';

export const moveAirplaneReducer = (
  state = initState.airplanePosition,
  action
) => {
  let addedMoving = 0;

  if (action.direction === 'Left') {
    if (state <= 0) {
      return state;
    }
    addedMoving = -5;
  } else if (action.direction === 'Right') {
    if (state >= 92) {
      return state;
    }
    addedMoving = 5;
  }

  switch (action.type) {
    case AIRPLANE_MOVING:
      return state + addedMoving;
    default:
      return state;
  }
};

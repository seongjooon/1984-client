import { IS_GAME_OVER } from '../constants/actionTypes';
import { initState } from './index';

export const gameOverReducer = (state = initState.isGameOver, action) => {
  switch (action.type) {
    case IS_GAME_OVER:
      return !state;
    default:
      return state;
  }
};

import { IS_GAME_START } from '../constants/actionTypes';
import { initState } from './index';

export const gameStartReducer = (state = initState.isGameStarted, action) => {
  switch (action.type) {
    case IS_GAME_START:
      return action.isStart;
    default:
      return state;
  }
};

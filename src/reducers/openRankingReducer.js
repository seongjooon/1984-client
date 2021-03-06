import { RANKING_OPEN } from '../constants/actionTypes';
import { initState } from './index';

export const openRankingReducer = (
  state = initState.isRankingOpened,
  action
) => {
  switch (action.type) {
    case RANKING_OPEN:
      return !state;
    default:
      return state;
  }
};

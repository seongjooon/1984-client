import { IS_BLOCK_MOBILE } from '../constants/actioncTypes';
import { initState } from './index';

export const checkIsBlockMobileReducer = (
  state = initState.isBlockMobile,
  action
) => {
  switch (action.type) {
    case IS_BLOCK_MOBILE:
      return action.isBlock;
    default:
      return state;
  }
};

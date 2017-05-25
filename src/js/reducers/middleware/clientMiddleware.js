/* eslint import/no-named-as-default: 0,
arrow-parens:0, no-shadow : 0,
import/prefer-default-export : 0*/
import { setSelectedPicture, sendVoteToRemote } from './Utils/middlewareUtils';
import { SET_SELECTED_PICTURE, CAST_PICTURE_VOTE_selector } from '../../constants/action-types/ActionTypes';

export const thunk = store => {
  const dispatch = store.dispatch;
  const getState = store.getState;

  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    switch (action.type) {
      case SET_SELECTED_PICTURE: {
        store.dispatch(setSelectedPicture(action));
        break;
      }
      case CAST_PICTURE_VOTE_selector: {
        sendVoteToRemote(action.data.pageId, action.data.pictureId, action.data.voteCount, action.data.socket);
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};

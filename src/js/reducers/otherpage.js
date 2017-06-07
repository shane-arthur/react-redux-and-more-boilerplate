/* eslint camelcase : 0*/
import { SET_SELECTED_PICTURE_otherpage } from '../constants/action-types/ActionTypes';
import { CAST_PICTURE_VOTE_receiver } from '../constants/action-types/ActionTypes';
import { setSelectedCardType, castVote } from './utils/stateUtils';

export default function otherpage(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_PICTURE_otherpage:
      return (setSelectedCardType(state, action.pictureId)); // eslint-disable-line no-use-before-define, max-len
    case CAST_PICTURE_VOTE_receiver:
      return (castVote(state, action.pageId, action.pictureId));
    default:
      return state;
  }
}



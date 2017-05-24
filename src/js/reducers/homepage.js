/* eslint camelcase : 0, no-use-before-define: 0*/
import { SET_SELECTED_PICTURE_homepage } from '../constants/action-types/ActionTypes';
import { CAST_PICTURE_VOTE_receiver } from '../constants/action-types/ActionTypes';
import { setSelectedCardType, castVote } from './utils/stateUtils';

export default function homepage(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_PICTURE_homepage:
      return (setSelectedCardType(state, action.pictureId));
    case CAST_PICTURE_VOTE_receiver:
      return (castVote(state, action.pageId, action.pictureId))
    default:
      return state;
  }
}

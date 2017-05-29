import * as types from '../constants/action-types/ActionTypes';

export function setselectedPicture(pageId, pictureId) { // eslint-disable-line import/prefer-default-export, max-len
  return { type: types.SET_SELECTED_PICTURE, pageId, pictureId };
}

export function castVoteForPicture(pageId, pictureId, voteCount, socket) {
  const data = {pageId, pictureId, voteCount, socket};
   return { type: types.CAST_PICTURE_VOTE_selector, data}
}

export function updateVoteCount(pageId, pictureId) {
   return { type: types.CAST_PICTURE_VOTE_receiver, pageId, pictureId}
}
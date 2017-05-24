import { sendData } from '../../../data/dataFetcher';
import { CAST_PICTURE_VOTE_receiver } from '../../../constants/action-types/ActionTypes'

export const setSelectedPicture = (action) => {
    const pictureId = action.pictureId;
    return {
        type: `${action.type}-${action.pageId}`,
        pictureId,
    };
};

export const sendVoteToRemote = (pageId, pictureId, voteCount, socket) => {
    const data = { pageId, pictureId, voteCount };
    sendData('castVote', data).then(response => {
        return response;
    }).catch(error => {
        return error;
    }).finally(returnedValue => {
        socket.emit('voteAdded', data);
    });
};
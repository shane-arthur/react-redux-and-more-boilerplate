export function setSelectedCardType(state, selectedPictureId) {
    return { ...state, selectedPictureId };
}

export function castVote(state, pageId, pictureId) {
    if (Object.keys(state).length > 0) {
        const items = state.items.map(item => {
            if (item.pictureId === pictureId) {
                ++item.voteCount;
            }
            return item;
        });
        return {...state, items };
    }
    return state;
}
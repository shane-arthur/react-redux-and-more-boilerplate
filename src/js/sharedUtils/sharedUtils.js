
export const sharedUtils = {
    extractSelectedPictureId: (items) => {
        const selectedPictureId = () => {
            return items.find(item => {
                return item['isSelected'] === true;
            });
        }
        return selectedPictureId ? selectedPictureId : 0;
    },
    orderItemsByVoteCount(items) {
        return items.sort((firstItem, secondItem) => {
            return firstItem.voteCount < secondItem.voteCount;
        });
    },
    extractPropertyAndApply(state, pageId, property, operation) {
        const propertyToAdjust = state[pageId][property];
        if (propertyToAdjust && typeof propertyToAdjust !== 'undefined') {
            state[pageId][property] = operation(propertyToAdjust);
        }
        return state;
    }
};
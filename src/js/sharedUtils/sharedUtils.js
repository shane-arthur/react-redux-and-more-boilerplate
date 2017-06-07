
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
    extractPropertyAndApply(state, properties, operation) {
        const newProperty = (() => {
            let extractedValue = null;
            properties.forEach(value => {
                if (extractedValue === null) {
                    extractedValue = state[value];
                }
                else{
                    extractedValue = extractedValue[value]
                }
            });
           return operation(extractedValue);
            
        })();

        state.homepage.items = newProperty;
        return state;
    }
};
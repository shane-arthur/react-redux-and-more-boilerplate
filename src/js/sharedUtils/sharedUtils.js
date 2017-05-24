
export const sharedUtils = {
    extractSelectedPictureId: (items) => {
        const selectedPictureId = () => {
            return items.find(item => {
                return item['isSelected'] === true;
            });
        }
        return selectedPictureId ? selectedPictureId : 0;
    }
};
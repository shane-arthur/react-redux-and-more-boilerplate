

export default function (app) {
    app.post('/setPicture', (req, res) => {
        let statusCode, returnResult = null;
        const pageId = req.body.pageId;
        const pictureId = req.body.pictureId;
        let voteCount = req.body.voteCount;
        /* istanbul ignore if  */
        if (isConnected()) {
            const selectedModel = getSelectedModel(pageId);
            if (selectedModel) {
                selectedModel.find(modelToUpdate => {
                    const items = modelToUpdate[pageId].items;
                    const updatedItems = items.map(item => {
                        if (item.pictureId === pictureId) {
                            ++item.voteCount;
                        }
                        return item;
                    });

                    modelToUpdate[pageId].items = updatedItems;
                    modelToUpdate.save(updatedVoteCountModel => {
                        statusCode = 200;
                        returnedResult = modelToUpdate[pageId].items[pictureId].voteCount;
                    }).catch(error => {
                        statusCode = 400;
                        returnedResult = ++voteCount;
                    });

                })
            } else {
                statusCode = 400;
                returnResult = `error updating vote count for : ${pageId} as we could not find the page`;
            }
        }
        else {
            statusCode = 400;
            returnResult = ++voteCount;
        }
        res.status(statusCode).send({ voteCount: returnResult });
    });
}
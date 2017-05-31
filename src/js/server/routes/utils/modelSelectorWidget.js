import homepage from '../../models/homepage';
import otherpage from '../../models/otherpage'

export const modelSelector = {
    initialize: () => {
        this.homepageModel = homepage;
        this.otherpageModel = otherpage;
        this.mappings = {
            'homepage': homepage,
            'otherpage': otherpage
        };
    },
    performModelGet: (modelName) => {
        return this.mappings[modelName] || null
    },
    getSelectedModel: (modelName) => {
        if (typeof this.mappings === 'undefined') {
            this.modelSelector.initialize();
        }
        return performModelGet(modelName);
    }
};
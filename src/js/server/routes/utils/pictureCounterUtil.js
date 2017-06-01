import fs from 'fs';
const dir = "./assets/images/";

export default class pictureCounterUtil {
    constructor() {
        this.pictures = (() => {
            if (global.__PICTURES__) {
                return global.__PICTURES__;
            }
            else {
                const pictures = fs.readdirSync(dir);
                global.__PICTURES__ = pictures;
                return pictures;
            }
        })();

        this.pictureMappings = (() => {
            const picMappings = {};
            this.pictures.forEach((pictures, i) => {
                picMappings[i] = pictures;
            });
            return picMappings;
        })();
    }

    _getPicturesInfo() {
        return this;
    }

}
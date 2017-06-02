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
    }

    _getPictureData() {
         if (typeof this.pictureMappings === 'undefined') {
            this.pictureMappings = (() => {
                const pictureMappings = {};
                this.pictures.forEach((value, i) => {
                    pictureMappings[i] = value.split(".jpg")[0];
                });
                return pictureMappings;
            })();
        }
        return this;
    }
}
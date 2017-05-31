import fs from 'fs';
const dir = "./assets/images/";

export default class pictureCounterUtil {
    constructor() {
        const getPicturesFromDirectory = () => {
            let picturesToReturn = null;
            if (global.__PICTURES__) {
                picturesToReturn = global.__PICTURES__;
            }
            else {
                const pictures = fs.readdirSync(dir);
                global.__PICTURES__ = pictures;
                picturesToReturn = pictures;
            }
            return picturesToReturn;
        }
        const getPictureMappings = () => {
            const pictureMappings = {}
            for (let i = 0; i < this.pictures.length; i++) {
                pictureMappings[i] = this.pictures[i];
            }
        }
        this.pictures = getPicturesFromDirectory();
        this.pictureMappings = getPictureMappings();
    }

    getSelectedPictures() {
        return this.pictures;
    }

    getSelectedPictureCount() {
        return this.pictures.length;
    }

    getPictureMappings() {
        return this.picturemappings;
    }
}
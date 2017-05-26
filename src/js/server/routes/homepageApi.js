import homepage from '../models/homepage';
import { homepageResponse } from '../../constants/fallback-data/homepage.config';
import mongoose from 'mongoose'
import pictureCounterUtil from './utils/pictureCounterUtil';
const picUtil = new pictureCounterUtil();

export default function (app) {
  app.get('/mainpageApi', (req, res) => {
    const pictures = picUtil.getSelectedPictures();
    const state = {};
    /* istanbul ignore next */
    const isConnected = mongoose.connection.readyState === 1 ? true : false;
    const errorFallback = () => {
      state.homepage = homepageResponse.homepage;
      state.homepage.selectedPictureId = 0;
      state.homepage.pictureList = pictures;
      res.status(200).send(state);
    };
   /* istanbul ignore if  */
    if (isConnected) {
      homepage.find().then((result) => {
        state.homepage = result[0].homepage;
        state.homepage.pictureList = pictures;
        res.send(200).json(state);
      }).catch((error) => {
        console.log(`error fetching data : ${error} - will attempt to get default state from resources`); // eslint-disable-line no-console
        errorFallback();
      });
    }
    else {
      errorFallback();
    }
  });
}

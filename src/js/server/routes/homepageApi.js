import homepage from '../models/homepage';
import { homepageResponse } from '../../constants/fallback-data/homepage.config';
import mongoose from 'mongoose'
import pictureCounterUtil from './utils/pictureCounterUtil';
import { sharedUtils } from '../../sharedUtils/sharedUtils';
const picUtil = new pictureCounterUtil();

export default function (app) {
  app.get('/mainpageApi', (req, res) => {
    const state = {};
    const picData = picUtil._getPictureData();
    homepage.find().then((result) => {
      let homepage = result[0].homepage;
      state.homepage = {...homepage, pictureList : picData.pictures, pictureMappings : picData.pictureMappings}
      return res.status(200).send(state);
    }).catch((error) => {
      console.log(`error fetching data : ${error} - will attempt to get default state from resources`); // eslint-disable-line no-console
    });
  });
}

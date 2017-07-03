import otherpage from '../models/otherpage';
import { otherpageResponse } from '../../constants/fallback-data/otherpage.config';
import mongoose from 'mongoose';
import pictureCounterUtil from './utils/pictureCounterUtil';
const picUtil = new pictureCounterUtil();

export default function (app) {
  app.get('/otherpageApi', (req, res) => {
    const state = {};
    const picData = picUtil._getPictureData();
    otherpage.find().then((result) => {
      state.otherpage = result[0].otherpage;
      state.otherpage.pictureList = picData.pictures;
      state.otherpage.pictureMappings = picData.pictureMappings;
      return res.send(200).json(state);
    }).catch((error) => {
      console.log(`error fetching data : ${error} - will attempt to get default state from resources`); // eslint-disable-line no-console
    });
  });
}

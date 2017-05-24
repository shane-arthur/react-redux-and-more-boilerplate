import otherpage from '../models/otherpage';
import { otherpageResponse } from '../../constants/fallback-data/otherpage.config';
import mongoose from 'mongoose'

export default function (app) {
  app.get('/otherpageApi', (req, res) => {
    const state = {};
    /* istanbul ignore next */
    const isConnected = mongoose.connection.readyState === 1 ? true : false;
    const errorFallback = () => {
      state.otherpage = otherpageResponse.otherpage;
      state.otherpage.selectedPictureId = 0;
      res.status(200).send(state);
    };
   /* istanbul ignore if  */
    if (isConnected) {
      otherpage.find().then((result) => {
        state.otherpage = result[0].otherpage;
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

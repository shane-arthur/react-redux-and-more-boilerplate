import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const mainpageSchema = mongoose.Schema({
  homepage: {
    items: [{
      pictureId: Number,
      content: String,
      voteCount: Number,
    }],
    selectedPictureId: { type: Number, default: 0 },
  },
});

export default mongoose.model('Homepage', mainpageSchema, 'Homepage');

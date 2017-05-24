import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const otherpageSchema = mongoose.Schema({
  otherpage: {
    items: [{
      pictureId: Number,
      content: String,
      voteCount: Number,
    }],
    selectedPictureId: { type: Number, default: 0 },
  },
});

export default mongoose.model('Otherpage', otherpageSchema, 'Otherpage');

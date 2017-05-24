import mongoose from 'mongoose';
import { dbConfig } from '../../config/index.config';

mongoose.connect(`mongodb://${dbConfig.mongoDb.username}:${dbConfig.mongoDb.password}@${dbConfig.mongoDb.url}/${dbConfig.mongoDb.dbName}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', () => {
  console.log('connected to mongo!'); // eslint-disable-line no-console
});

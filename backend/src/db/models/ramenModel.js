import mongoose from 'mongoose';
import schemas from '../schemas';

const { ramenSchema } = schemas;
const ramenModel = {
  RamenModel: mongoose.model('Ramen', ramenSchema),
  RamenTempModel: mongoose.model('RamenTemp', ramenSchema),
};

export default ramenModel;

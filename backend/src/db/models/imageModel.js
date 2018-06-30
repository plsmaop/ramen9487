import mongoose from 'mongoose';
import schemas from '../schemas';

const { imageSchema } = schemas;

export default mongoose.model('Image', imageSchema);

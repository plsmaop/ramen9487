import mongoose from 'mongoose';
import schemas from '../schemas';

const { reviewSchema } = schemas;

export default mongoose.model('Review', reviewSchema);

import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  image: { data: Buffer, contentType: String },
});

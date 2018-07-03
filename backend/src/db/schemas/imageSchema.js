import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  path: String,
  image: { data: String, contentType: String },
});

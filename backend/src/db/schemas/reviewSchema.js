import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  scores: {
    food: Number,
    env: Number,
    service: Number,
  },
  content: String,
  author: String,
  authorId: String,
  time: String,
  timeStamp: String,
});

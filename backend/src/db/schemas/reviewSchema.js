import mongoose from 'mongoose';

export default new mongoose.Schema({
  id: String,
  reviews: [{
    score: {
      all: String,
      food: String,
      env: String,
      service: String,
    },
    content: String,
    author: String,
  }],
});

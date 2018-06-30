import mongoose from 'mongoose';

export default new mongoose.Schema({
  name: String,
  address: String,
  location: [String],
  phone: String,
  tag: [String],
  totalScore: String,
  scores: {
    food: String,
    env: String,
    service: String,
  },
  price: {
    high: String,
    low: String,
  },
  others: [String],
  isPublish: Boolean,
  popularity: String,
});

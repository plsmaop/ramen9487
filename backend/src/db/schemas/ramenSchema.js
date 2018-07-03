import mongoose from 'mongoose';

export default new mongoose.Schema({
  name: String,
  address: String,
  location: [String],
  phone: String,
  tag: [String],
  totalScore: Number,
  scores: {
    food: Number,
    env: Number,
    service: Number,
  },
  price: {
    high: String,
    low: String,
  },
  others: [String],
  menu: [String],
  bussinessHours: [String],
  url: String,
  isPublish: Boolean,
  popularity: Number,
  reviewNumber: Number,
  img: [String],
});

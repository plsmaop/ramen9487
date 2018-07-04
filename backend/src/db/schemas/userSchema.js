import mongoose from 'mongoose';

export default new mongoose.Schema({
  username: String,
  password: String,
  medel: [String],
  email: String,
  type: String,
  myRamen: [String],
  ramenRecords: [{
    weekday: String,
    name: String,
    id: String,
    year: String,
    month: String,
    data: String,
    time: String,
    img: [String],
  }],
  isVeryfied: Boolean,
});

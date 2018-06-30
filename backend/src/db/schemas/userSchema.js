import mongoose from 'mongoose';

export default new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  type: String,
  diary: {
    myRamen: [String],
    ramenRecord: [mongoose.Schema.Types.Mixed],
  },
});

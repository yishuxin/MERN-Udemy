const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: Sting,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date()
  }
});

module.exports = User = mongoose.model('user', UserSchema);

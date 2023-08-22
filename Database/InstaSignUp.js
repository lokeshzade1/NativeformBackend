let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  phoneNumberOrEmail: { type: String, required: true },
  FullName: { type: String, required: true },
  UserName: { type: String, required: true },
  passWord: { type: String, required: true },
  post: { type: Array },
  profilePhoto: { type: String },
  discriptionOfUser: { type: String },
  following: { type: Array },
  follow: { type: Array },
});
let model = mongoose.model('instaSignUp', schema);
module.exports = model;

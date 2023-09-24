let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  post: { type: String },
  expireAt: { type: Date, default: Date.now() },
});
let model = mongoose.model('allpost', schema);
module.exports = model;

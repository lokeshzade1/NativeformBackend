let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  post: { type: String },
});
let model = mongoose.model('allpost', schema);
module.exports = model;

let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
let model = mongoose.model('user', schema);
module.exports = model;

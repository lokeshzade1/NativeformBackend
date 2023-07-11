let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});
let model = mongoose.model('userLogin', schema);
module.exports = model;

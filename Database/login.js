let mongoose = require('mongoose');
let schema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  expireAt: { type: Date, default: Date.now() },
});
schema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });
let model = mongoose.model('userLogin', schema);
module.exports = model;

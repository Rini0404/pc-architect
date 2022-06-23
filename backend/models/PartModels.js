const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
  type: {
    type: String,
    // required: true,
  },
  brand: {
    type: String,
    // required: true,
  },
  model: {
    type: String,
    // required: true,
  },
  rank: {
    type: String,
    // required: true,
  },
  benchmark: {
    type: String,
    // required: true,
  },
  url: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Part', partSchema);
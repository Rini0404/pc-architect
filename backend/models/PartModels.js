const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Type: String,
  Brand: String,
  Model: String,
  Rank: Number,
  Benchmark: Number,
  Samples: Number,
  URL: String
});

function createModelForCollection(collectionName) {
  return mongoose.model(collectionName, baseSchema, collectionName);
}

const Cpu = createModelForCollection('cpu');
const Gpu = createModelForCollection('gpu');
const Hdd = createModelForCollection('hdd');
const Ram = createModelForCollection('ram');
const Ssd = createModelForCollection('ssd');
const Usb = createModelForCollection('usb');

module.exports = { Cpu, Gpu, Hdd, Ram, Ssd, Usb };

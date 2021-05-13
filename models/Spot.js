const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;

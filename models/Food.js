const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pointSchema = require('./pointSchema')

const FoodSchema = new Schema({
  photo: {
    type: String
  },
  description: {
    type: String
  },

  price: {
    type: Number
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Food = mongoose.model( 'Food', FoodSchema);

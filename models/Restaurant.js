const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Food = require("./Food");

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  food: {
    type: [Food.Schema]
  },
  priceRange: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  location: {}
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);

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
//   restaurantId: {
//     // type: Schema.Types.ObjectId
//     type: [{ type: Schema.Types.ObjectId, ref: "restaurants" }]
//     //what does this do?
//   },
  price: {
    type: Number
  },
//   location: {

//   },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Food = mongoose.model( 'Food', FoodSchema);

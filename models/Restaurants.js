const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Food = require("./Foods")
const pointSchema = require('./pointSchema')

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

    location: {
		type: pointSchema,
		required: true
    }
})

module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema)
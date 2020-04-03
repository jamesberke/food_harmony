const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Food = require("./Food");
const pointSchema = require("./pointSchema");

const RestaurantSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	foods: {
		type: [Food.Schema],
	},
	priceRange: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},

	location: {
		type: pointSchema,
		// required: true,
	},

	photo: {
		type: String
	}

});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);

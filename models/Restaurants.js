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
		required: true,
	},
	phoneNumber: {
		type: String
	},
	streetAddress: {
		type: String
	},
	// cityAddress reffers to the City, State, and Zipcode (second line of the full address)
	cityAddress: {
		type: String
	}
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);

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
		type: Number,
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
	phoneNumber: {
		type: String
	},
	// format: "12683 Ocean Ave."
	streetAddress: {
		type: String
	},
	// cityAddress reffers to the City, State, and Zipcode
	// format: "San Francisco, CA 94112"
	cityAddress: {
		type: String
	},
	webLink: {
		type: String
	},
	photo: {
		type: String
	}
});

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantSchema);

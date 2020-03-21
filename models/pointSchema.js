const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ["Point"], //must be Point
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});
pointSchema.index({coordinates: '2dsphere'});
module.exports = pointSchema;
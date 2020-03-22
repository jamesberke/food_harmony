const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointSchema = require('./pointSchema')

const UserSchema = new Schema({
	
	email: {
	  type: String,
	  required: true
	},
	password: {
	  type: String,
	  required: true
	},

	firstName: {
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	},

	location: {
		type: pointSchema,
		required: true
	},

	date: {
	  type: Date,
	  default: Date.now
	}
  })

  module.exports = User = mongoose.model('User', UserSchema);


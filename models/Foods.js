const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointSchema = require('./pointSchema')


const FoodSchema = new Schema({
    photoUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    restaurantId: {
        // type: Schema.Types.ObjectId 
        type: [{ type: Schema.Types.ObjectId, ref: 'restaurants' }]
                        //what does this do?
    },
    price: {
        type: Number,
    },
    location: {
		type: pointSchema,
		required: true
    }
})


module.exports = Food = mongoose.model( 'foods', FoodSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Restaurant = require("./Restaurants");


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

    }
})


module.exports = Food = mongoose.model( 'foods', FoodSchema);
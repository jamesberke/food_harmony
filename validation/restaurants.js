const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRestaurantInput(data) {
    let errors = {}

    data.name = validText(data.name) ? data.name : "";
    data.priceRange = validText(data.priceRange) ? data.priceRange : "";
    data.food

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Restaurant MUST have a name'
    }
    if (Validator.isEmpty(data.priceRange)) {
        errors.priceRange = 'Restaurant MUST have a Price Range'
    }

    if (Validator.isEmpty(data.food.photoUrl)) {
        errors.food.photoUrl = 'to be continued. not done with validations'
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}




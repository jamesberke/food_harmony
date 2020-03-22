const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

const Restaurant = require("../../models/Restaurant");

const validateRestaurantInput = require("../../validation/restaurants");

router.get("/test", (req, res) => res.json({ msg: "successful test" }));

// posting new restaurant
// router.post( "/", (req, res) => {
//     const { errors, isValid } = validateRestaurantInput(req.body);
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newRestaurant = new Restaurant({
//       name: req.body.name,
//       food: req.body.food, //should we keep this here? or expand on it with empty strings?
//       priceRange: req.body.priceRange
//       // photoUrl: req.body.food.photoUrl,
//       // description: req.body.food.description,
//       // restaurantId: req.body.food.restaurantId,
//       // price: req.body.food.price,
//       // location: req.body.food.location,
//       // priceRange: req.body.priceRange
//       // add these qualities in some kind of update function...
//     });

//     newRestaurant.save().then(restaurant => res.json(restaurant));
//   }
// );

// posting photos w/ restaurant ID

module.exports = router;

//gets the restaurants near the location.
router.get("/find", (req, res) => {
	const geoOptions = {
		distanceField: "distance.calculated",
		spherical: true,
		maxDistance: req.body.distance,
		key: "location.coordinates",
		//query: additional query params ie with description?
	};

	// try {
		let limit = req.body.limit ? req.body.limit : 10;
		const results = Restaurant.aggregate([
			{
				$geoNear: {
					near: req.body.location,
					...geoOptions,
				},
			},
			{
				$limit: limit,
			},
		]);

		const restaurants = results.map(result => {
			/*
				return a key-value pair with [id => {id:..., name...}, id => {id:..., name...}]
			
			 return {
			 	[result._id]: {
			 		id: result._id,
			 		name: result.name,
			 		priceRange: result.priceRange,
			 		coordinates: result.location.coordinates,
			 		distance: result.distance.calculated.toFixed(),
			 		date: result.date,
			 	},
			 };*/

			return {
				id: result._id,
				name: result.name,
				priceRange: result.priceRange,
				coordinates: result.location.coordinates,
				distance: result.distance.calculated.toFixed(),
				date: result.date,
			};
		});

		res.status(200).json("TEST!");
	// } catch (error) {
	// 	res.status(404).json(error);
	// }
});

// posting new restaurant
router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateRestaurantInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		}

		const newRestaurant = new Restaurant({
			name: req.body.name,
			food: req.body.food, //should we keep this here? or expand on it with empty strings?
			priceRange: req.body.priceRange,
			location: req.body.location,
			// photoUrl: req.body.food.photoUrl,
			// description: req.body.food.description,
			// restaurantId: req.body.food.restaurantId,
			// price: req.body.food.price,
			// priceRange: req.body.priceRange
			// add these qualities in some kind of update function...
		});

		newRestaurant.save().then(restaurant => res.json(restaurant));
	}
);

// posting photos w/ restaurant ID
router.patch(
	"/:restaurantId",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Restaurant.findById(req.params.restaurantId, (err, restaurant) => {});
	}
);

module.exports = router;

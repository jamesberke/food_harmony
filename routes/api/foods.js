const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");
const AWS = require("aws-sdk");

const Food = require("../../models/Foods");
const Restaurant = require("../../models/Restaurants");
// const validateRestaurantInput = require("../../validation/restaurants");

router.get("/test", (req, res) => res.json({ msg: "successful test" }));

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		// 3 lines or so of validations

		const newFood = new Food({
			// photoURL: AWSreference,
			description: req.body.description,
			price: req.body.price,
			location: req.body.location,
			restaurantId: req.body.restaurantId,
		});

		try {
			const restaurant = await Restaurant.findByIdAndUpdate(
				req.body.restaurantId,
				{
					$push: {
						foods: newFood,
					},
				},
				{ new: true }
			);

			res.status(200).json(restaurant);
		} catch (error) {
			res.status(404).json(error);
		}
	}
);

//Find for foods is actually being done as a restaurant search, where we performa geo search on
//restaurants collection based on the location and then extract the foods from them.
router.get("/find", async (req, res) => {
	const geoOptions = {
		distanceField: "distance.calculated",
		spherical: true,
		maxDistance: req.body.distance,
		key: "location.coordinates",
		//query: additional query params ie with description?
	};

	try {
		// let limit = req.body.limit ? req.body.limit : 10;
		const results = await Restaurant.aggregate([
			{
				$geoNear: {
					near: req.body.location,
					...geoOptions,
				},
			},
			{$match: {"foods": {$ne: null}}},
	
		]);


		let foodResults = [];
		for (let i = 0; i < results.length; i++) {
			let restaurantId = results[i]._id;
			if (!!results[i].foods) {
				for (let j = 0; j < results[i].foods.length; j++) {
					results[i].foods[j].restaurantId = restaurantId;
					results[i].foods[j].restaurantName = results[i].name;
					results[i].foods[j].location =
						results[i].location.coordinates;
					results[i].foods[j].distance = results[
						i
					].distance.calculated.toFixed();
					foodResults.push(results[i].foods[j]);
				}
			}
		}
		res.status(200).json(foodResults);
	} catch (error) {
		res.status(404).json(error);
	}
});

module.exports = router;

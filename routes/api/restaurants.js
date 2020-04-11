const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const keys = require("../../config/keys");
const Restaurant = require("../../models/Restaurants");

AWS.config.update({
	secretAccessKey: keys.AWS_SECRET_KEY_ID,
	accessKeyId: keys.AWS_ACCESS_KEY_ID,
	region: keys.AWS_REGION,
});
const s3 = new AWS.S3();

router.get("/test", (req, res) => res.json({ msg: "successful test" }));

module.exports = router;

//gets the restaurants near the location.
router.get("/find", async (req, res) => {
	const geoOptions = {
		distanceField: "distance.calculated",
		spherical: true,
		maxDistance: req.body.distance,
		key: "location.coordinates",
		//query: additional query params ie with description?
	};

	try {
		let limit = req.body.limit ? req.body.limit : 10;
		const results = await Restaurant.aggregate([
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

		const restaurants = results.map((result) => {
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

		res.status(200).json(restaurants);
	} catch (error) {
		res.status(404).json(error);
	}
});

function uploadImage(key, req, res) {
	return new Promise((resolve, reject) => {
		multer({
			storage: multerS3({
				s3: s3,
				contentType: multerS3.AUTO_CONTENT_TYPE,
				bucket: keys.AWS_BUCKET_NAME,
				key: function (req, file, cb) {
					cb(null, file.originalname); //names file original name
				},
			}),
		}).single(key)(req, res, (err) => {
			if (err) {
				//reject the promise
				reject(err);
			} else {
				//resolve the promise
				resolve(res);
			}
		});
	});
}

// posting new restaurant
router.post(
	"/new",
	// passport.authenticate("jwt", { session: false }),
	(req, res) => {

		uploadImage("photo", req, res)
			.then((res) => {
				const newRestaurant = new Restaurant({
					name: req.body.name,
					priceRange: req.body.priceRange,
					photo: req.file.location,
					location: {
						type: "Point",
						coordinates: [
							req.body.location_long,
							req.body.location_lat,
						],
					},
				});
				return newRestaurant.save();
			})
			.then((restaurant) => res.json(restaurant));
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

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

// const validateRestaurantInput = require("../../validation/restaurants");

AWS.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY_ID,
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  region: keys.AWS_REGION
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

		res.status(200).json(restaurants);
	} catch (error) {
		res.status(404).json(error);
	}
});



const upload = multer({
  storage: multerS3({
    s3: s3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    bucket: keys.AWS_BUCKET_NAME,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, Date.now().toString());
      //cb(null, file.originalname); //use cb(null, Date.now().toString()) for unique file keys
    }
  })
}).single("picture");


// posting new restaurant
router.post(
	"/new",
	// passport.authenticate("jwt", { session: false }),
	(req, res) => {
		upload(req, res, err => {
			if (err) {
				res.status(400).send("Could not reach AWS S3")
			} else {
				// const { errors, isValid } = validateRestaurantInput(req.body);
				// if (!isValid) {
				// 	return res.status(400).json(errors);
				// }
				const newRestaurant = new Restaurant({
					name: req.body.name,
					// food: req.body.food, //should we keep this here? or expand on it with empty strings?
					priceRange: req.body.priceRange,
					photo: req.file.location
					// location: req.body.location,
				});
				newRestaurant.save().then(restaurant => res.json(restaurant));
			}
		});
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

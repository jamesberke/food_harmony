const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const passport = require("passport");
const Food = require("../../models/Food");
const Restaurant = require("../../models/Restaurants");
// const validateRestaurantInput = require("../../validation/restaurants");
AWS.config.update({
	secretAccessKey: keys.AWS_SECRET_KEY_ID,
	accessKeyId: keys.AWS_ACCESS_KEY_ID,
	region: keys.AWS_REGION
});

const s3 = new AWS.S3();
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
			restaurantId: req.body.restaurantId
		});

		try {
			const restaurant = await Restaurant.findByIdAndUpdate(
				req.body.restaurantId,
				{
					$push: {
						foods: newFood
					}
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
router.post("/find", async (req, res) => {

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
					...geoOptions
				}
			},
			{ $match: { foods: { $ne: null } } }
		]);

		let foodResults = [];
		for (let i = 0; i < results.length; i++) {
			let restaurantId = results[i]._id;
			if (!!results[i].foods) {
				for (let j = 0; j < results[i].foods.length; j++) {
					results[i].foods[j].restaurantId = restaurantId;
					results[i].foods[j].restaurantName = results[i].name;
					results[i].foods[j].location = results[i].location.coordinates;
					results[i].foods[j].restaurantPriceRange = results[i].priceRange;
					results[i].foods[j].restaurantPhoneNumber = results[i].phoneNumber;
					results[i].foods[j].restaurantStreetAddress = results[i].streetAddress;
					results[i].foods[j].restaurantCityAddress = results[i].cityAddress;
					results[i].foods[j].restaurantWebLink = results[i].webLink;
					results[i].foods[j].restaurantPhoto = results[i].photo;
					results[i].foods[j].distance = results[i]
						.distance.calculated.toFixed();
					foodResults.push(results[i].foods[j]);
				}
			}
		}
		res.status(200).json(foodResults);
	} catch (error) {
		res.status(404).json(error);
	}
});

const upload = multer({
	storage: multerS3({
		s3: s3,
		contentType: multerS3.AUTO_CONTENT_TYPE,
		bucket: keys.AWS_BUCKET_NAME,
		key: function (req, file, cb) {

			cb(null, Date.now().toString());
			//cb(null, file.originalname); //use cb(null, Date.now().toString()) for unique file keys
		},
	}),
}).single("picture");

// router.post(
// 	"/new",
// 	passport.authenticate("jwt", { session: false }),
// 	(req, res) => {
// 		upload(req, res, err => {
// 			// console.log(res);
// 			if (err) {
// 				res.status(400).send("Something went wrong!");
// 			} else {
// 				// res.send(req.file);
// 				const newFood = new Food({
// 					photo: req.file.location,
// 					description: req.body.description,
// 					price: req.body.price,
// 					location: req.body.location,
// 					restaurantId: req.body.restaurantId
// 				});

// 				const restaurant = Restaurant.findByIdAndUpdate(
// 					req.body.restaurantId,
// 					{
// 						$push: {
// 							foods: newFood
// 						}
// 					},
// 					{ new: true }
// 				).exec();

// 				res.status(200).json(restaurant);
// 			}
// 		});
// 	}
// );

module.exports = router;

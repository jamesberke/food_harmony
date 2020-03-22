const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");

const Restaurant = require("../../models/Restaurant");
const validateRestaurantInput = require("../../validation/restaurants");

router.get("/test", (req, res) => res.json({ msg: "successful test" }));

// posting new restaurant
router.post( "/", (req, res) => {
    const { errors, isValid } = validateRestaurantInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRestaurant = new Restaurant({
      name: req.body.name,
      food: req.body.food, //should we keep this here? or expand on it with empty strings?
      priceRange: req.body.priceRange,
      // location: 
    });

    newRestaurant.save().then(restaurant => res.json(restaurant));
  }
);

// posting photos w/ restaurant ID

module.exports = router;


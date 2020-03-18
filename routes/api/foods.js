const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require('../../config/keys')
const AWS = require("aws-sdk")

const Foods = require("../../models/Foods");
// const validateRestaurantInput = require("../../validation/restaurants");


router.get("/test", (req, res) => res.json({ msg: "successful test" }));

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    // 3 lines or so of validations


    const newFood = new Food ({
        photoURL: AWSreference,
        description: req.body.description,
        price: req.body.description,
        location: APIreference
    });
    newFood.save().then(restaurant => res.json(restaurant))
});

module.exports  = router
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");
const AWS = require("aws-sdk"); 
const multerS3 = require("multer-s3")
const multer = require("multer")



const Foods = require("../../models/Foods");
// const validateRestaurantInput = require("../../validation/restaurants");


AWS.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY_ID,
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  region: keys.AWS_REGION
});

const s3 = new AWS.S3()

router.get("/test", (req, res) => res.json({ msg: "food route" }));

router.get("/:foodsId", (req, res) => {
  
})


// test
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.AWS_BUCKET_NAME,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, Date.now().toString());
      //cb(null, file.originalname); //use cb(null, Date.now().toString()) for unique file keys
    }
  })
}).single("picture");
// end


router.post( "/new", (req, res) => {
    const s3FileUrl = keys.AWS_Uploaded_file_URL_LINK;
    // test begin
      upload(req, res, err => {
        console.log(res);
        if (err) {
          res.status(400).send("Something went wrong!");
        } else {
          res.send(req.file);
          const newFood = new Food({
            photo: req.file.location, 
            description: req.body.description,
            price: req.body.price
            //   location: //APIreference?? key in?
          });
          newFood.save().then(restaurant => res.json(restaurant));
        }
      });
  }
);

module.exports = router;


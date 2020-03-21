const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const AWS = require("aws-sdk"); 
const multerS3 = require("multer-s3")
const multer = require("multer")
const Food = require("../../models/Food");


AWS.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY_ID,
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  region: keys.AWS_REGION
});

const s3 = new AWS.S3()

router.get("/test", (req, res) => res.json({ msg: "food route" }));




const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, Date.now().toString());
    }
  })
}).single("picture");


router.post( "/new", (req, res) => {
    // const s3FileUrl = keys.AWS_Uploaded_file_URL_LINK;
      upload(req, res, err => {
        console.log(res);
        if (err) {
          res.status(400).send("Could not save to server!");
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


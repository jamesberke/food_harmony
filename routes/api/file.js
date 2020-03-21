const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const keys = require("../../config/keys")
// const upload = require('../upload')
const multerS3 = require("multer-s3");
const multer = require("multer");


AWS.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY_ID,
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  region: keys.AWS_REGION
});
const s3 = new AWS.S3();

router.get("/test", (req, res) => res.json({ msg: "test route" }));

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.AWS_BUCKET_NAME,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use cb(Date.now().toString()) for unique file keys
    }
  })
}).single("demo_image");
//uploads with key of demo-image
router.post('/upload', function(req, res) {
  upload(req, res, err => {
    console.log(res)
    if (err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
});

module.exports = router

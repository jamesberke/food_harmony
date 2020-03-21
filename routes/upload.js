// file is mostly useless


const keys = require("../config/keys");
require("dotenv").config();
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

AWS.config.update({
    secretAccessKey: keys.AWS_SECRET_KEY_ID,
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    region: keys.AWS_REGION
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const s3 = new AWS.S3();



const multerS3Config = multerS3({
    s3: s3Config,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
},
  key: function(req, file, cb) {
    console.log(file);
    cb(null, new Date().toISOString() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.AWS_BUCKET_NAME,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});



module.exports = upload

// file is mostly useless
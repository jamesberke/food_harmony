const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys")
// const busboy = require('connect-busboy');
// const busboyBodyParser = require('busboy-body-parser');

const port = process.env.PORT || 5000;
const restaurants = require("./routes/api/restaurants");
const foods = require("./routes/api/foods");
const users = require("./routes/api/users");



mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully!"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/restaurants", restaurants);
app.use("/api/foods", foods);





// allow foods to adopt this and parse URL
const file = require("./routes/api/file")
app.use("/api/file", file)
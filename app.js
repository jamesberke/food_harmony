const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys")

const foods = require("./routes/api/foods")

const port = process.env.PORT || 5000;
const restaurants = require("./routes/api/restaurants");

const users = require("./routes/api/users");



mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully!"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use("/api/restaurants", restaurants);
app.use("/api/foods", foods);

// 
const http = context.services.get("GooglePlaces");
    return http
        .get({url: GooglePlacesSearchURL})
        .then(res => {
            let search_result = EJSON.parse(res.body.text());
        });


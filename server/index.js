// import all the necessary packages
const path = require('path');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// we are using port 4000
const port = process.env.PORT || 4000;

// we will create these todoRoutes in the future
const postRoutes = require("./routes/post");

const app = express();
const uri = process.env.MONGODB_URI;
// const localURI = "mongodb://localhost/post_app";
const localURI = "mongodb+srv://root:winter1298@cluster0.r9efm8g.mongodb.net/test";

// DB connection
mongoose
  .connect(localURI || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json());

// include the todoRoutes
app.use("/", postRoutes);

// start the server in the port 3000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});

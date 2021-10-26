const mongoose = require("mongoose");

//create database
mongoose
  .connect("mongodb://localhost:27017/mdynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

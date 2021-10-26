const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate(value) {
      if (validator.isEmail(value)) {
        throw new Error("Invalid email id");
      }
    },
  },
});

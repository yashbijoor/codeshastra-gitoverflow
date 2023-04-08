const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    required: [true, "Please enter the email"],
    unique: true,
  },
  password: { type: String, required: true },
});

module.exports = userSchema;

const mongoose = require("mongoose");
const validator = require("validator");
const categorySchema = require("./categoryModel");

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
  monthlyIncome: Number,
  budget: [categorySchema],
  janExpense: [Number],
  febExpense: [Number],
  marchExpense: [Number],
  aprilExpense: [Number],
  mayExpense: [Number],
  juneExpense: [Number],
  julyExpense: [Number],
  augExpense: [Number],
  septExpense: [Number],
  octExpense: [Number],
  novExpense: [Number],
  decExpense: [Number],
});

module.exports = userSchema;

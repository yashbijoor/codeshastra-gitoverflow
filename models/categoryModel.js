const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  travelling: Number,
  food: Number,
  housing: Number,
  additional: Number,
});

module.exports = categorySchema;

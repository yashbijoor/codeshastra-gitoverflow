const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  travelling: { type: Number, default: 0 },
  food: { type: Number, default: 0 },
  vacation: { type: Number, default: 0 },
  housing: { type: Number, default: 0 },
  health: { type: Number, default: 0 },
  additional: { type: Number, default: 0 },
});

module.exports = categorySchema;

const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  amount: Number,
  emi: Number,
  tenure: Number,
});

module.exports = loanSchema;

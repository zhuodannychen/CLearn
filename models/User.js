const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const init = new Array(5000).fill("false")
const str = init.toString()

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  count: {
      type: Number,
      default: 0
  },
  currentknowledge: {
      type: String,
      default: str
  },
  tabindex: {
      type: Number,
      default: 0  
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

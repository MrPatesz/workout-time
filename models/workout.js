const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Workout = db.model("Workout", {
  name: String,
  date: Date,
  length: Number,
});

module.exports = Workout;

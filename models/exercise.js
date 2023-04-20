const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Exercise = db.model("Exercise", {
  name: String,
  targetMuscles: String,
  sets: Number,
  reps: Number,
  _workout: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
  },
});

module.exports = Exercise;

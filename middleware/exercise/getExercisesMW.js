const requireOption = require("../requireOption");

/**
 * @description Load all exercises from the database.
 * The result is saved to res.locals.exercises.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const ExerciseModel = requireOption(objRepo, "ExerciseModel");

  return (_req, res, next) => {
    if (typeof res.locals.workout === "undefined") {
      return next();
    }

    ExerciseModel.find({ _workout: res.locals.workout._id })
      .then((exercises) => {
        res.locals.exercises = exercises;
        return next();
      })
      .catch((err) => next(err));
  };
};

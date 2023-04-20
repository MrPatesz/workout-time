const requireOption = require("../requireOption");

/**
 * @description Load all workouts from the database.
 * The result is saved to res.locals.workouts.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const WorkoutModel = requireOption(objRepo, "WorkoutModel");

  return (_req, res, next) => {
    WorkoutModel.find({})
      .then((workouts) => {
        res.locals.workouts = workouts;
        return next();
      })
      .catch((err) => next(err));
  };
};

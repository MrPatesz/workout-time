const requireOption = require("../requireOption");

/**
 * @description Load a workout from the database using the :workoutId param.
 * The result is saved to res.locals.workout.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const WorkoutModel = requireOption(objRepo, "WorkoutModel");

  return (req, res, next) => {
    const workoutId = req.params.workoutId;
    WorkoutModel.findOne({ _id: workoutId })
      .then((workout) => {
        if (!workout) {
          throw new Error(`Could not find workout with id: ${workoutId}`);
        }

        res.locals.workout = workout;
        return next();
      })
      .catch((err) => next(err));
  };
};

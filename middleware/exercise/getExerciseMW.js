const requireOption = require("../requireOption");

/**
 * @description Load an exercise from the database using the :exerciseId param.
 * The result is saved to res.locals.exercise.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const ExerciseModel = requireOption(objRepo, "ExerciseModel");

  return (req, res, next) => {
    if (typeof res.locals.workout === "undefined") {
      return next();
    }

    const exerciseId = req.params.exerciseId;
    ExerciseModel.findOne({ _id: exerciseId, _workout: res.locals.workout._id })
      .then((exercise) => {
        if (!exercise) {
          throw new Error(`Could not find exercise with id: ${exerciseId}`);
        }

        res.locals.exercise = exercise;
        return next();
      })
      .catch((err) => next(err));
  };
};

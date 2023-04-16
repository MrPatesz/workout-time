const mockedExercises = require('../../mock/exercises');

/**
 * @description Load an exercise from the database using the :exerciseId param.
 * The result is saved to res.locals.exercise.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    const exerciseId = parseInt(req.params.exerciseId);
    res.locals.exercise = mockedExercises.find((e) => e._id === exerciseId);
    return next();
  };
};

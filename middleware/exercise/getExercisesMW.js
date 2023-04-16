const mockedExercises = require('../../mock/exercises');

/**
 * @description Load all exercises from the database.
 * The result is saved to res.locals.exercises.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    const workoutId = parseInt(req.params.workoutId);
    res.locals.exercises = mockedExercises.filter(
      (e) => e.workoutId === workoutId
    );
    return next();
  };
};

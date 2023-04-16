const mockedWorkouts = require('../../mock/workouts');

/**
 * @description Load a workout from the database using the :workoutId param.
 * The result is saved to res.locals.workout.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    const workoutId = parseInt(req.params.workoutId);
    res.locals.workout = mockedWorkouts.find((w) => w._id === workoutId);
    return next();
  };
};

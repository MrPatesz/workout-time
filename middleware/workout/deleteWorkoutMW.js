const mockedWorkouts = require('../../mock/workouts');

/**
 * @description Removes a workout from the database, the entity used here is: res.locals.workout.
 * Redirects to /workouts after delete.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res) => {
    const workoutId = parseInt(req.params.workoutId);
    const index = mockedWorkouts.findIndex((w) => w._id === workoutId);
    mockedWorkouts.splice(index, 1);

    return res.redirect('/workouts');
  };
};

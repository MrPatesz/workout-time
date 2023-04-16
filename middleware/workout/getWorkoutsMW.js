const mockedWorkouts = require('../../mock/workouts');

/**
 * @description Load all workouts from the database.
 * The result is saved to res.locals.workouts.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.workouts = mockedWorkouts;
    return next();
  };
};

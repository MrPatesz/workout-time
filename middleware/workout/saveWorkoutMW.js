/**
 * @description Using POST params update or save a workout to the database.
 * If res.locals.workout is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /workouts after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    // TODO
    return next();
  };
};

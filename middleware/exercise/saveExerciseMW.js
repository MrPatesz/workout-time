/**
 * @description Using POST params update or save an exercise to the database.
 * If res.locals.exercise is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /exercises/:workoutId after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    // TODO
    return next();
  };
};

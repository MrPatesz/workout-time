/**
 * @description Removes a workout from the database, the entity used here is: res.locals.workout.
 * Redirects to /workouts after delete.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (_req, res, next) => {
    if (typeof res.locals.workout === "undefined") {
      return next();
    }

    res.locals.workout
      .deleteOne()
      .then(() => res.redirect("/workouts"))
      .catch((err) => next(err));
  };
};

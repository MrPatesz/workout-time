/**
 * @description Removes an exercise from the database, the entity used here is: res.locals.exercise.
 * Redirects to /exercises/:workoutId after delete.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (_req, res, next) => {
    if (
      typeof res.locals.exercise === "undefined" ||
      typeof res.locals.workout === "undefined"
    ) {
      return next();
    }

    res.locals.exercise
      .deleteOne()
      .then(() => res.redirect(`/exercises/${res.locals.workout._id}`))
      .catch((err) => next(err));
  };
};

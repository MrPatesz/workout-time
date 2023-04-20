const requireOption = require("../requireOption");

/**
 * @description Using POST params update or save a workout to the database.
 * If res.locals.workout is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /workouts after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const WorkoutModel = requireOption(objRepo, "WorkoutModel");

  return (req, res, next) => {
    if (!req.body.name || !req.body.date || !req.body.length) {
      return next();
    }

    if (typeof res.locals.workout === "undefined") {
      res.locals.workout = new WorkoutModel({
        name: req.body.name,
        date: req.body.date,
        length: req.body.length,
      });
    } else {
      res.locals.workout.name = req.body.name;
      res.locals.workout.date = req.body.date;
      res.locals.workout.length = req.body.length;
    }

    res.locals.workout
      .save()
      .then(() => res.redirect("/workouts"))
      .catch((err) => next(err));
  };
};

const requireOption = require("../requireOption");

/**
 * @description Using POST params update or save an exercise to the database.
 * If res.locals.exercise is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /exercises/:workoutId after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  const ExerciseModel = requireOption(objRepo, "ExerciseModel");

  return (req, res, next) => {
    if (
      !req.body.name ||
      !req.body.targetMuscles ||
      !req.body.sets ||
      !req.body.reps ||
      !res.locals.workout
    ) {
      return next();
    }

    const workoutId = res.locals.workout._id;

    if (typeof res.locals.exercise === "undefined") {
      res.locals.exercise = new ExerciseModel({
        _workout: workoutId,
        name: req.body.name,
        targetMuscles: req.body.targetMuscles,
        sets: req.body.sets,
        reps: req.body.reps,
      });
    } else {
      res.locals.exercise._workout = workoutId;
      res.locals.exercise.name = req.body.name;
      res.locals.exercise.targetMuscles = req.body.targetMuscles;
      res.locals.exercise.sets = req.body.sets;
      res.locals.exercise.reps = req.body.reps;
    }

    res.locals.exercise
      .save()
      .then(() => res.redirect(`/exercises/${workoutId}`))
      .catch((err) => next(err));
  };
};

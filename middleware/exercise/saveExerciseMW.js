const mockedExercises = require('../../mock/exercises');

/**
 * @description Using POST params update or save an exercise to the database.
 * If res.locals.exercise is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /exercises/:workoutId after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    if (
      !req.body.name ||
      !req.body.targetMuscles ||
      !req.body.sets ||
      !req.body.reps
    ) {
      return next();
    }

    const workoutId = parseInt(res.locals.workout._id);
    const isUpdate = typeof res.locals.exercise !== 'undefined';
    const exerciseId = isUpdate
      ? res.locals.exercise._id
      : Math.floor(Math.random() * 999);

    res.locals.exercise = {
      _id: exerciseId,
      workoutId: workoutId,
      name: req.body.name,
      targetMuscles: req.body.targetMuscles,
      sets: req.body.sets,
      reps: req.body.reps,
    };

    if (isUpdate) {
      const index = mockedExercises.findIndex((e) => e._id === exerciseId);
      mockedExercises.splice(index, 1, res.locals.exercise);
    } else {
      mockedExercises.push(res.locals.exercise);
    }

    return res.redirect(`/exercises/${workoutId}`);
  };
};

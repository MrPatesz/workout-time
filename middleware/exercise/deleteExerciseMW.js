const mockedExercises = require('../../mock/exercises');

/**
 * @description Removes an exercise from the database, the entity used here is: res.locals.exercise.
 * Redirects to /exercises/:workoutId after delete.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res) => {
    const exerciseId = parseInt(req.params.exerciseId);
    const index = mockedExercises.findIndex((e) => e._id === exerciseId);
    mockedExercises.splice(index, 1);

    const workoutId = parseInt(req.params.workoutId);
    return res.redirect(`/exercises/${workoutId}`);
  };
};

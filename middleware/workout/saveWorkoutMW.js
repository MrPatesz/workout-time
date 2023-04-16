const mockedWorkouts = require('../../mock/workouts');

/**
 * @description Using POST params update or save a workout to the database.
 * If res.locals.workout is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /workouts after success.
 * @param {Object} objRepo
 * @returns {Function}
 */
module.exports = (objRepo) => {
  return (req, res, next) => {
    if (!req.body.name || !req.body.date || !req.body.length) {
      return next();
    }

    const isUpdate = typeof res.locals.workout !== 'undefined';
    const workoutId = isUpdate
      ? res.locals.workout._id
      : Math.floor(Math.random() * 999);

    res.locals.workout = {
      _id: workoutId,
      name: req.body.name,
      date: req.body.date,
      length: req.body.length,
    };

    if (isUpdate) {
      const index = mockedWorkouts.findIndex((w) => w._id === workoutId);
      mockedWorkouts.splice(index, 1, res.locals.workout);
    } else {
      mockedWorkouts.push(res.locals.workout);
    }

    return res.redirect('/workouts');
  };
};

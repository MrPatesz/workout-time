const renderMW = require('../middleware/renderMW');
const getWorkoutsMW = require('../middleware/workout/getWorkoutsMW');
const getWorkoutMW = require('../middleware/workout/getWorkoutMW');
const saveWorkoutMW = require('../middleware/workout/saveWorkoutMW');
const deleteWorkoutMW = require('../middleware/workout/deleteWorkoutMW');
const getExercisesMW = require('../middleware/exercise/getExercisesMW');
const getExerciseMW = require('../middleware/exercise/getExerciseMW');
const saveExerciseMW = require('../middleware/exercise/saveExerciseMW');
const deleteExerciseMW = require('../middleware/exercise/deleteExerciseMW');

module.exports = (app) => {
  const objRepo = {};

  app.use(
    '/workouts/new',
    saveWorkoutMW(objRepo),
    renderMW(objRepo, 'workout')
  );
  app.use(
    '/workouts/edit/:workoutId',
    getWorkoutMW(objRepo),
    saveWorkoutMW(objRepo),
    renderMW(objRepo, 'workout')
  );
  app.get(
    '/workouts/delete/:workoutId',
    getWorkoutMW(objRepo),
    deleteWorkoutMW(objRepo)
  );
  app.get('/workouts', getWorkoutsMW(objRepo), renderMW(objRepo, 'workouts'));

  app.use(
    '/exercises/:workoutId/new',
    getWorkoutMW(objRepo),
    saveExerciseMW(objRepo),
    renderMW(objRepo, 'exercise')
  );
  app.use(
    '/exercises/:workoutId/edit/:exerciseId',
    getWorkoutMW(objRepo),
    getExerciseMW(objRepo),
    saveExerciseMW(objRepo),
    renderMW(objRepo, 'exercise')
  );
  app.get(
    '/exercises/:workoutId/delete/:exerciseId',
    getWorkoutMW(objRepo),
    getExerciseMW(objRepo),
    deleteExerciseMW(objRepo)
  );
  app.get(
    '/exercises/:workoutId',
    getWorkoutMW(objRepo),
    getExercisesMW(objRepo),
    renderMW(objRepo, 'exercises')
  );
};

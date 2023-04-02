/**
 * @description Using the template engine render the values into the template.
 * @param {Object} objRepo
 * @param {string} viewName
 * @returns {Function}
 */
module.exports = (objRepo, viewName) => {
  return (req, res) => {
    // TODO
    res.end(
      `render: ${viewName}.html ${
        req.params.workoutId ? `workoutId:${req.params.workoutId}` : ''
      } ${req.params.exerciseId ? `exerciseId:${req.params.exerciseId}` : ''}`
    );
  };
};

/**
 * @description Using the template engine render the values into the template.
 * @param {Object} objRepo
 * @param {string} viewName
 * @returns {Function}
 */
module.exports = (objRepo, viewName) => {
  return (_req, res) => {
    res.render(viewName, res.locals);
  };
};

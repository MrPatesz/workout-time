/**
 * @description Load a dependency from an object repository
 * @param {Object} objRepo
 * @param {string} propertyName
 * @returns {*}
 */
module.exports = (objRepo, propertyName) => {
  if (objRepo && objRepo[propertyName]) {
    return objRepo[propertyName];
  }
  throw new TypeError(`${propertyName} required`);
};

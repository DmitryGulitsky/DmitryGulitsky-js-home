'use strict';
var multiplyNumericFunction = function multiplyNumeric(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
module.exports = multiplyNumericFunction;

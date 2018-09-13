'use strict';
function multiplyNumeric(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
var image = {width: 100, height: 400, title: 'Cool image'};
console.log(multiplyNumeric(image));
module.exports = image;

'use strict';

function isPal(string){
  var stringArray = string.split('');
  var reverseString = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ' ') {
      stringArray.splice(i, 1);
    }
  }
  var modifiedString = stringArray.join('').toLowerCase();
  reverseString = stringArray.reverse().join('').toLowerCase();
  if (modifiedString.indexOf(reverseString) !== -1) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPal;

'use strict';

function anClean(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var count = 0;
      if (arr[i].length === arr[j].length) {
        for ( var letterI = 0; letterI < arr[i].length; letterI++) {
          for (var letterJ = 0; letterJ < arr[j].length; letterJ++) {
            if (arr[i].charAt(letterI) === arr[j].charAt(letterJ)) {
              count++;
            }
          }
        }
        if (count === arr[j].length) {
          arr.splice(arr[j], 1);
        }
      }
    }
  }
  return arr;
}

module.exports = anClean;

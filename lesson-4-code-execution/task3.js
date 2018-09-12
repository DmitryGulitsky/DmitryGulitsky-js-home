'use strict';
var inputArray = [];
var i = 0;
while (inputArray[i] !== false || inputArray[i] === 'number' || inputArray[i] !== '') {
  prompt(inputArray[i]);
  i++;
}
console.log(inputArray);

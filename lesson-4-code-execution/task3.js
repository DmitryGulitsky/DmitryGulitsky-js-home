'use strict';
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var inputArray = [];
do {
  var inputNumber = prompt('Введите число:');
  var parsedInputNumber = parseInt(inputNumber);
  inputArray.push(inputNumber);
} while (isNumeric(parsedInputNumber));
var sum = 0;
for (var i = 0; i < (inputArray.length - 1); i++) {
  sum += Number(inputArray[i]);
}
alert('Сумма введеных чисел: ' + sum);

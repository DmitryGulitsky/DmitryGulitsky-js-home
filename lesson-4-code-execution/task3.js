'use strict';
var inputArray = [];
do {
  var inputNumber = prompt('Введите число:');
  var parsedInputNumber = parseInt(inputNumber);
  if (isNaN(parsedInputNumber)) break;
  inputArray.push(inputNumber);
} while (true);
var sum = 0;
for (var i = 0; i < inputArray.length; i++) {
  sum += +inputArray[i];
}
alert('Сумма введеных чисел: ' + sum);

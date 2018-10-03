'use strict';
function drawConsole(row, col) {
  var tempRow;
  var symbOne = '#';
  var symbTwo = ' ';

  for (var i = 0; i < row; i++) {
    tempRow = '';
    for (var j = 0; j < col; j++) {
      if (i % 2) {
        (j % 2) ? tempRow += symbOne : tempRow += symbTwo;
      } else {
        (j % 2) ? tempRow += symbTwo : tempRow += symbOne;
      }
    }
    tempRow += '\n';
    console.log(tempRow);
  }
}

function isNumeric(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

function makeNatural(n) {
  return Math.abs(n) ^ 0;
}

var a;
var b;

do {
  a = prompt('Введите число строк: ', '');
} while (!isNumeric(a));

do {
  b = prompt('Введите число столбцов: ', '');
} while (!isNumeric(b));

a = makeNatural(a);
b = makeNatural(b);

drawConsole(a, b);

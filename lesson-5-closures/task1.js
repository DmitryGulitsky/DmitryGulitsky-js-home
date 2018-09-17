function octothorpeSquare(widthOctothorpeSquare) {
  console.log(inputWidthOctothorpeSquare);
  var cycleCondition = 0;
  var finalOctothorpeSquare = '';
  if (widthOctothorpeSquare % 2 !== 0) {
    cycleCondition = widthOctothorpeSquare / 2 - 1;
  } else {
    cycleCondition = widthOctothorpeSquare / 2;
  }
  for (var i = 0; i < cycleCondition; i++) {
    finalOctothorpeSquare += '\n';
    for (var j = 0; j < widthOctothorpeSquare; j++) {
      finalOctothorpeSquare += '# ';
    }
    finalOctothorpeSquare += '\n';
    for (j = 0; j < widthOctothorpeSquare; j++) {
      finalOctothorpeSquare += ' #';
    }
  }
  if (widthOctothorpeSquare % 2 !== 0) {
    finalOctothorpeSquare += '\n';
    for (j = 0; j < (widthOctothorpeSquare); j++) {
      finalOctothorpeSquare += '# ';
    }
  } return finalOctothorpeSquare;
}
do var inputWidthOctothorpeSquare = prompt('Введите количество символов # на одной стороне:');
while (isNaN(parseInt(inputWidthOctothorpeSquare)) || inputWidthOctothorpeSquare === 0);
console.log(octothorpeSquare(inputWidthOctothorpeSquare));

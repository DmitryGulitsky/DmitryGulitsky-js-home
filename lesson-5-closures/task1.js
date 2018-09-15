function octothorpeSquare(widthOctothorpeSquare) {
  var oneLineSquare = '';
  var j = 0;
  for (var i = 0; i < widthOctothorpeSquare; i++) {
    oneLineSquare += ' #';
  }
  for (i = 0; i < (widthOctothorpeSquare / 2); (i + 2)) {
    console.log(oneLineSquare);
    j = i++;
    if (j < widthOctothorpeSquare) {
      console.log(' ' + oneLineSquare);
    } else break;
  }
}
var inputWidthOctothorpeSquare;
do inputWidthOctothorpeSquare = +prompt('Введите количество символов # на одной стороне:');
while ((typeof inputWidthOctothorpeSquare) !== 'number');
octothorpeSquare(inputWidthOctothorpeSquare);

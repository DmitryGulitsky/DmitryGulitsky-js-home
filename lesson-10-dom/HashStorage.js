var THashStorage = function (key, value) {
  this.key = key;
  this.value = value;
  var drinkStorage = {};
};

THashStorage.prototype.addValue = function (key, value) {
  THashStorage.drinkStorage.key = value;
};

function clickAddValue() {
  var key = prompt('Input name of the drink, please');
  var value = prompt('Input recipe of the drink, please');
  var addNewDrink = new THashStorage(key, value);
}

clickAddValue();
console.log(THashStorage);

var THashStorage = function (key, value) {
  this.key = key;
  this.value = value;
  var drinkStorage = {};
};

THashStorage.prototype.addValue = function (key, value) {
  THashStorage.drinkStorage.key = value;
};



clickAddValue();
console.log(THashStorage);

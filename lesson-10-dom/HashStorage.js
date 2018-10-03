var THashStorage = function () {
  var drinkStorage = {name: '', alcohol: '', recipe: ''};
};

THashStorage.prototype.addValue = function(key, value) {
  this.key = key;
  this.value = value;
  this.drinkStorage.name = prompt('Input name of the drink, please');
  this.drinkStorage.alcohol = prompt('Is it alcohol drink?');
  this.drinkStorage.recipe = prompt('Input recipe of the drink, please');
};

THashStorage.prototype.getValue = function(key) {
  Object.keys(drinkStorage);
  }
};

THashStorage.prototype.deleteValue = function(key) {

};

THashStorage.prototype.getKeys = function(key, value) {

  }
};

THashStorage.addValue('Salt water', [false, '100g water + 3g salt']);
THashStorage.getValue();
THashStorage.deleteValue();
THashStorage.getKeys();

function TLocalStorage(name) {
  this.name = name;
  this.storage = JSON.parse(localStorage.getItem(this.name)) || {};
}

TLocalStorage.prototype.addValue = function (key, value) {
  this.storage[key] = value;
  localStorage.setItem(this.name, JSON.stringify(this.storage));
};

TLocalStorage.prototype.getValue = function (key) {
  return this.storage[key];
};

TLocalStorage.prototype.deleteValue = function (key) {
  if (this.storage[key]) {
    delete this.storage[key];
    localStorage.setItem(this.name, JSON.stringify(this.storage));
    return true;
  } else {
    return false;
  }
};

TLocalStorage.prototype.getKeys = function () {
  var keys = [];

  for (var i in this.storage) {
    keys.push(i);
  }

  return keys;
};
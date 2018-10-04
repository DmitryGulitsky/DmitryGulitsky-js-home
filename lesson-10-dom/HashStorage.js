var THashStorage = function () {
  this.addValue = function (key, value) {
    storage[key] = value;
    console.log(storage);
  };
  this.getValue = function (key) {
    if (storage[key]) {
      console.log(storage[key]);
    } else {
      console.log('There is no such drink in the storage');
      console.log(storage);
    }
  };
  this.deleteValue = function (key) {
    if (storage[key]) {
      delete storage[key];
    } else {
      console.log('There is no such drink in the storage');
      console.log(storage);
    }
  };
  this.getKeys = function () {
    console.log(Object.keys(storage));
  };
};

function THashStorage() {
  var self = this;

  self.addValue = function(key, value) {
    self.pHash[key] = value;
  };

  self.getValue = function(key) {
    return self.pHash[key];
  };

  self.deleteValue = function(key) {
    return delete self.pHash[key];
  };

  self.getKeys = function() {
    return (Object.keys(self.pHash));
  };
}

function TLocalStorage(localStorageKey) {
  var self = this,
    pHash = {};

  self.reset = function (storageName) {
    if (window.localStorage.getItem(localStorageKey)) {
      storageName.pHash = JSON.parse(JSON.stringify(JSON.parse(window.localStorage.getItem(localStorageKey))));
    }
  };

  self.addValue = function (key, value) {
    if (window.localStorage.getItem(localStorageKey)) {
      pHash = JSON.parse(window.localStorage.getItem(localStorageKey));
    }
    pHash[key] = value;
    window.localStorage.setItem(localStorageKey, JSON.stringify(pHash));
  };

  self.deleteValue = function (key) {
    if (window.localStorage.getItem(localStorageKey)) {
      pHash = JSON.parse(window.localStorage.getItem(localStorageKey));
    }
    if (pHash[key]) {
      pHash.deleteValue(key);
    }
    window.localStorage.setItem(localStorageKey, JSON.stringify(pHash));
  };
}

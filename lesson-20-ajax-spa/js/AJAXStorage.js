'use strict';

var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

function TAjaxStorage(address) {
  this.storage = {};
  this.address = address;
  this.getStorageInfo();
}

TAjaxStorage.prototype.getStorageInfo = function () {
  var that = this;
  $.ajax({
    url: AjaxHandlerScript,
    type: 'POST',
    data: {
      f: 'READ',
      n: this.address
    },
    cache: false,
    success: function (response) {
      if (response.result) {
        var result = JSON.parse(response.result);
        that.storage = result;
      } else {
        that.storage = {};
      }
    },
    error: that.errorHandler
  });
};

TAjaxStorage.prototype.addValue = function (name, info) {
  this.storage[name] = info;
  this.unlockStorageInfo();
};

TAjaxStorage.prototype.deleteValue = function (name) {
  if (this.storage[name]) {
    delete this.storage[name];
  }
  this.unlockStorageInfo();
};

TAjaxStorage.prototype.unlockStorageInfo = function () {
  var password = '123d';
  var that = this;
  $.ajax({
    url: AjaxHandlerScript,
    type: 'POST',
    data: {
      f: 'LOCKGET',
      n: this.address,
      p: password
    },
    cache: false,
    success: function () {
      $.ajax({
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'UPDATE',
          n: that.address,
          p: password,
          v: JSON.stringify(that.storage)
        },
        cache: false,
        error: that.errorHandler
      })
    },
    error: this.errorHandler
  })
};

TAjaxStorage.prototype.getKeys = function () {
  return Object.keys(this.storage);
};

TAjaxStorage.prototype.errorHandler = function () {
  console.log('Ошибка!');
};

/*TAjaxStorage.prototype.insertStorageInfo = function () {
  $.ajax({
    url: AjaxHandlerScript,
    type: 'POST',
    data: {
      f: 'INSERT',
      n: this.address,
      v: JSON.stringify(this.storage)
    },
    cache: false,
    success: function (response) {
      console.log(response);
    },
    error: this.errorHandler
  });
};*/
'use strict';

var drinkStorage = new AJAXStorage();

function AJAXStorage() {
  var self = this;

  self.hashStorage = {};

  var AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {f: 'READ', n: 'GULITSKY_DRINKS_STORAGE'},
      success: DataLoadedRead,
      error: ErrorHandler
    }
  );

  function DataLoadedRead(data) {
    if (data !== ' ') {
      self.hashStorage = JSON.parse(data.result);
    } else if (data === undefined) {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {f: 'INSERT', n: 'GULITSKY_DRINKS_STORAGE', v: JSON.stringify(self.hashStorage)},
          success: DataLoadedInsert,
          error: ErrorHandler
        }
      );

      function DataLoadedInsert(data) {
        console.log('Drink upload complete');
      }
    }
  }

  self.addValue = function(key, value) {
    self.hashStorage[key] = value;

    addValueOnTheServer(self.hashStorage);

  }

  self.getValue = function (key) {
    if (key in self.hashStorage) {
      return self.hashStorage[key];
    } else {
      return undefined;
    }
  }

  self.deleteValue = function (key) {
    if (key in self.hashStorage) {
      delete self.hashStorage[key];

      addValueOnTheServer(self.hashStorage);

      return true;
    } else {
      return false;
    }
  };

  self.getKeys = function () {
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push('' + key);
    }
    return keys;
  };

  function addValueOnTheServer(hash) {
    var password = Math.random();

    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'GULITSKY_DRINKS_STORAGE', p: password},
        success: DataLoadedLockget,
        error: ErrorHandler
      }
    );

    function DataLoadedLockget(data) {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {f: 'UPDATE', n: 'GULITSKY_DRINKS_STORAGE', p: password, v: JSON.stringify(hash)},
          success: DataLoadedUpdate,
          error: ErrorHandler
        }
      );
      function DataLoadedUpdate() {
        console.log('Drink upload complete');
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + '' + ErrorStr);
  }
}

'use strict';

(function () {
  function imgToPositionAbsolute() {
    var imageElems = document.getElementsByTagName('img');
    var positionArray = [];
    for (var i = 0; i < imageElems.length; i++) {
      positionArray = imageElems[i].getBoundingClientRect();
      console.log(positionArray);
    }
    console.log(imageElems);
    for (i = 0; i < imageElems.length; i++) {
      var imageElem = imageElems[i];
      imageElem.style.position = 'absolute';
    }
  }
  imgToPositionAbsolute();
})();

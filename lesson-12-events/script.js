'use strict';

(function () {
  function imgToPositionAbsolute() {
    var imageElems = document.getElementsByTagName('img');
    var positionArray = [];
    for (var i = 0; i < imageElems.length; i++) {
      positionArray.push(imageElems[i].getBoundingClientRect());
      var imageElem = imageElems[i];
      var xPosition = positionArray[i].x;
      var yPosition = positionArray[i].y;
      imageElem.style.position = 'absolute';
      imageElem.style.left = xPosition.toString();
      imageElem.style.top = yPosition.toString();
      console.log(positionArray[i]);
      console.log(positionArray[i].x);
      console.log(positionArray[i].y);
      console.log(positionArray);
    }
    console.log(imageElems);
  }
  imgToPositionAbsolute();
})();

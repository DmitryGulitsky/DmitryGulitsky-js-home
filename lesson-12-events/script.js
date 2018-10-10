'use strict';

(function () {
  function getImgPosition() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].style.left = imageElems[i].offsetLeft + 'px';
      imageElems[i].style.top = imageElems[i].offsetTop + 'px';
    }
  }

  function imgToPositionAbsolute() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].style.position = 'absolute';
    }
    console.log(imageElems);
  }

  function setDragAttributes() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].addEventListener('dragstart' ,dragStart, true);
      imageElems[i].addEventListener('dragend', dragEnd, true);
      // imageElems[i].ondragstart = dragStart(event);
      // imageElems[i].ondragend = dragEnd(event);
    }
  }

  var imageElems = document.getElementsByTagName('img');
  var DragImage = null; // какая картинка сейчас перетаскивается
  var DragShiftX;
  var DragShiftY;

  function dragStart(EO) {
    EO = EO || window.event;
    console.log('DragImage = ' + EO);
    DragImage = EO.target;
  }

  function dragEnd(EO) {
    EO = EO || window.event;
    console.log('drag finished');
    DragImage = null;
  }



  getImgPosition();
  imgToPositionAbsolute();
  setDragAttributes();

})();

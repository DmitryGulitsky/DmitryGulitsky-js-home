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
  }

  function setDragAttributes() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].addEventListener('dragstart', dragStart, true);
      imageElems[i].addEventListener('dragend', dragEnd, true);
    }
    console.log(imageElems);
  }

  var imageElems = document.getElementsByTagName('img');
  var DragImage = null; // какая картинка сейчас перетаскивается
  var DragImgX = null; // координата левого верхнего угла картинки по Х
  var DragImgY = null; // координата левого верхнего угла картинки по Y
  var DragClickX = null; // координата нажатия на кнопку мышки по Х
  var DragClickY = null; // координата нажатия на кнопку мышки по Y
  var DropClickX = null; // координата отпускания кнопки мышки по Х
  var DropClickY = null; // координата отпускания кнопки мышки по Y
  var DragShiftX = null; // расстояние от места клика на картинке до верхнего левого угла по Х
  var DragShiftY = null; // расстояние от места клика на картинке до верхнего левого угла по Y
  var imgZindex = 0; // переменная для свойства z-index

  function dragStart(EO) {
    EO = EO || window.event;
    DragImage = EO.target;
    DragImgX = DragImage.offsetLeft;
    DragImgY = DragImage.offsetTop;
    DragClickX = EO.pageX;
    DragClickY = EO.pageY;
    DragShiftX = DragClickX - DragImgX;
    DragShiftY = DragClickY - DragImgY;
    console.log('DragImgX = ' + DragImgX);
    console.log('DragImgY = ' + DragImgY);
    console.log('DragClickX = ' + DragClickX);
    console.log('DragClickY = ' + DragClickY);
    console.log('DragShiftX = ' + DragShiftX);
    console.log('DragShiftY = ' + DragShiftY);
    console.log('----------------------------');
  }

  function dragEnd(EO) {
    EO = EO || window.event;
    DragImage = EO.target;
    DropClickX = EO.pageX;
    DropClickY = EO.pageY;
    DragImage.style.left = DropClickX - DragShiftX + 'px';
    DragImage.style.top = DropClickY - DragShiftY + 'px';
    imgZindex++;
    DragImage.style.zIndex = imgZindex.toString();
    console.log('DropClickX = ' + DropClickX);
    console.log('DropClickY = ' + DropClickY);
    console.log('zIndex = ' + imgZindex);
    console.log('drag finished');
    console.log('----------------------------');
    DragImage = null;
    DragImgX = null;
    DragImgY = null;
    DragClickX = null;
    DragClickY = null;
    DropClickX = null;
    DropClickY = null;
    DragShiftX = null;
    DragShiftY = null;
  }
  getImgPosition();
  imgToPositionAbsolute();
  setDragAttributes();
})();

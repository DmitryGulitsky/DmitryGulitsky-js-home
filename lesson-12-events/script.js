'use strict';

(function () {
  function getImgPosition() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].style.left = imageElems[i].offsetLeft + 'px';
      imageElems[i].style.top = imageElems[i].offsetTop + 'px';
      imageElems[i].style.zIndex = '0';
    }
  }

  function imgToPositionAbsolute() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].style.position = 'absolute';
    }
  }

  function setDragAttributes() {
    for (var i = 0; i < imageElems.length; i++) {
      imageElems[i].addEventListener('mousedown', dragStart, true);
      imageElems[i].addEventListener('mouseup', dragEnd, true);
    }
  }

  var imageElems = document.getElementsByTagName('img');
  var imageContainer = document.getElementsByTagName('div');
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
    DragImage.style.cursor = 'move';
    imgZindex++;
    DragImage.style.zIndex = imgZindex.toString();
    DragImgX = DragImage.offsetLeft;
    DragImgY = DragImage.offsetTop;
    DragClickX = EO.pageX;
    DragClickY = EO.pageY;
    DragShiftX = DragClickX - DragImgX;
    DragShiftY = DragClickY - DragImgY;
    DragImage.addEventListener('mousemove', dragMove, true);
    DragImage.addEventListener('mouseleave', dragMove, true);
    DragImage.addEventListener('mouseover', dragMove, true);
    DragImage.addEventListener('mouseout', dragMove, true);
    DragImage.addEventListener('mouseenter', dragMove, true);
    console.log('DragImgX = ' + DragImgX);
    console.log('DragImgY = ' + DragImgY);
    console.log('DragClickX = ' + DragClickX);
    console.log('DragClickY = ' + DragClickY);
    console.log('DragShiftX = ' + DragShiftX);
    console.log('DragShiftY = ' + DragShiftY);
    console.log('----------------------------');
  }

  function dragMove(EO) {
    EO = EO || window.event;
    DragImage = EO.target;
    DropClickX = EO.pageX;
    DropClickY = EO.pageY;
    DragImage.style.left = DropClickX - DragShiftX + 'px';
    DragImage.style.top = DropClickY - DragShiftY + 'px';
  }

  function dragEnd(EO) {
    EO = EO || window.event;
    DragImage = EO.target;
    EO.preventDefault();
    DragImage.removeEventListener('mousemove', dragMove, true);
    DragImage.removeEventListener('mouseleave', dragMove, true);
    DragImage.removeEventListener('mouseover', dragMove, true);
    DragImage.removeEventListener('mouseout', dragMove, true);
    DragImage.removeEventListener('mouseenter', dragMove, true);
    DragImage.style.cursor = 'default';
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

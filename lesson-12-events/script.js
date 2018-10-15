'use strict';

(function () {
  function getImgPosition() {
    for (var i = imageElems.length - 1; i >= 0; i--) {
      imageElems[i].style.left = imageElems[i].offsetLeft + 'px';
      imageElems[i].style.top = imageElems[i].offsetTop + 'px';
      imageElems[i].style.zIndex = '0';
      imageElems[i].style.position = 'absolute';
      imageElems[i].addEventListener('mousedown', dragStart, false);
    }
  }

  var imageElems = document.getElementsByTagName('img');
  var DragImage = null; // какая картинка сейчас перетаскивается
  var DragClickX = null; // координата нажатия на кнопку мышки по Х
  var DragClickY = null; // координата нажатия на кнопку мышки по Y
  var DragShiftX = null; // расстояние от места клика на картинке до верхнего левого угла по Х
  var DragShiftY = null; // расстояние от места клика на картинке до верхнего левого угла по Y
  var imgZindex = 0; // переменная для свойства z-index

  function dragStart(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    DragImage = EO.target;
    imgZindex++;
    DragImage.style.zIndex = imgZindex.toString();
    DragImage.style.cursor = 'move';
    DragClickX = EO.pageX;
    DragClickY = EO.pageY;
    DragShiftX = DragClickX - DragImage.offsetLeft;
    DragShiftY = DragClickY - DragImage.offsetTop;
    window.addEventListener('mousemove', dragMove, false);
    window.addEventListener('mouseup', dragEnd, false);
    window.addEventListener('mouseout', dragEnd, false);
    console.log('drag start');
    console.log('----------------------------');
  }

  function dragMove(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    DragImage = EO.target;
    DragImage.style.left = EO.pageX - DragShiftX + 'px';
    DragImage.style.top = EO.pageY - DragShiftY + 'px';
  }

  function dragEnd(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    DragImage.style.cursor = 'default';
    window.removeEventListener('mousemove', dragMove, false);
    window.removeEventListener('mouseup', dragEnd, false);
    window.removeEventListener('mouseout', dragEnd, false);
    console.log('drag finished');
    console.log('----------------------------');
    DragImage = null;
    DragClickX = null;
    DragClickY = null;
    DragShiftX = null;
    DragShiftY = null;
  }

  getImgPosition();
})();

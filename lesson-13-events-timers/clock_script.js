'use strict';

(function () {
  var clockContainer = document.createElement('div');
  document.body.appendChild(clockContainer);
  clockContainer.style.backgroundColor = 'grey';
  clockContainer.style.height = 300 + 'px';
  clockContainer.style.width = 300 + 'px';
  clockContainer.style.borderRadius = 50 + '%';
  for (var i = 1; i < 13; i++) {
    var hourContainer = document.createElement('div');
    clockContainer.appendChild(hourContainer);
    hourContainer.style.cssText = 'position: absolute; ' +
      'background-color: white; ' +
      'height: 40px; ' +
      'width: 40px; ' +
      'border-radius: 50%;' +
      'font-size: 35px;' +
      'text-align: center';
    hourContainer.textContent = i.toString();
    var containerCenterX = clockContainer.offsetLeft + clockContainer.offsetWidth / 2;
    var containerCenterY = clockContainer.offsetTop + clockContainer.offsetHeight / 2;
    var angle = (30 * i) / 180 * Math.PI;
    var hourCenterX = containerCenterX + 120 * Math.sin(angle);
    var hourCenterY = containerCenterY - 120 * Math.cos(angle);
    hourContainer.style.left = Math.round(hourCenterX - hourContainer.offsetWidth / 2) + 'px';
    hourContainer.style.top = Math.round(hourCenterY - hourContainer.offsetHeight / 2) + 'px';}

  var numericClock = document.createElement('span');
  clockContainer.appendChild(numericClock);
  numericClock.style.cssText = 'position: relative; ' +
    'height: 30px; ' +
    'width: 100%; ' +
    'font-size: 35px;' +
    'top: 25%;' +
    'left: 36%;' +
    'font-size: 25px;' +
    'text-align: center';

  function UpdateTime() {
    var CurrTime = new Date();
    var CurrTimeStr = FormatDateTime(CurrTime);
    numericClock.innerHTML = CurrTimeStr.toString();
  }

  function FormatDateTime(DT) {
    var Hours = DT.getHours();
    var Minutes = DT.getMinutes();
    var Seconds = DT.getSeconds();
    return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
  }
  function Str0L(Val, Len) {
    var StrVal = Val.toString();
    while (StrVal.length < Len) {
      StrVal = '0' + StrVal;
    }
    return StrVal;
  }

  setInterval(UpdateTime, 1000);



})();

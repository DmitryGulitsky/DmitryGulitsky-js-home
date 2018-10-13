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
    hourContainer.style.top = Math.round(hourCenterY - hourContainer.offsetHeight / 2) + 'px';
  }

  var secondArrow = document.createElement('div');
  clockContainer.appendChild(secondArrow);
  secondArrow.style.height = 120 + 'px';
  secondArrow.style.width = 4 + 'px';
  secondArrow.style.backgroundColor = 'black';
  secondArrow.style.position = 'absolute';
  secondArrow.style.left = (clockContainer.offsetWidth / 2 + secondArrow.offsetWidth / 2) + 'px';
  secondArrow.style.top = 35 + 'px';
  secondArrow.style.transformOrigin = 50 + '% ' + 100 + '%';
  secondArrow.style.borderRadius = 20 + '%';

  setInterval(rotateSecondArrow, 1000);
  var sec = 0;
  function rotateSecondArrow() {
    secondArrow.style.transform = 'rotate(' + sec + 'deg)';
    sec += 6;
  }

  var minuteArrow = document.createElement('div');
  clockContainer.appendChild(minuteArrow);
  minuteArrow.style.height = 120 + 'px';
  minuteArrow.style.width = 10 + 'px';
  minuteArrow.style.backgroundColor = 'black';
  minuteArrow.style.position = 'absolute';
  minuteArrow.style.left = (clockContainer.offsetWidth / 2 + minuteArrow.offsetWidth / 2) + 'px';
  minuteArrow.style.top = 36 + 'px';
  minuteArrow.style.transformOrigin = 50 + '% ' + 100 + '%';
  minuteArrow.style.borderRadius = 20 + '%';


  var min = 0;
  setInterval(rotateMinuteArrow, 300000);
  function rotateMinuteArrow() {
    minuteArrow.style.transform = 'rotate(' + sec + 'deg)';
    if (min === 360) {
      min = 0;
    }
    min += 6;
  }

  var hourArrow = document.createElement('div');
  clockContainer.appendChild(hourArrow);
  hourArrow.style.height = 120 + 'px';
  hourArrow.style.width = 14 + 'px';
  hourArrow.style.backgroundColor = 'black';
  hourArrow.style.position = 'absolute';
  hourArrow.style.left = (clockContainer.offsetWidth / 2 + hourArrow.offsetWidth / 2) + 'px';
  hourArrow.style.top = 35 + 'px';
  hourArrow.style.transformOrigin = 50 + '% ' + 100 + '%';
  hourArrow.style.borderRadius = 20 + '%';

  var hour = 0;
  setInterval(rotateHourArrow, 3600000);
  function rotateHourArrow() {
    hourArrow.style.transform = 'rotate(' + sec + 'deg)';
    if (hour === 360) {
      hour = 0;
    }
    hour += 6;
  }






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

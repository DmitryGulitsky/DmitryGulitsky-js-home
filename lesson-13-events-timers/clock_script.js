'use strict';

(function () {
  var clockContainer = document.createElement('div'); // создаем каркас часов
  document.body.appendChild(clockContainer);
  clockContainer.style.backgroundColor = 'grey';
  clockContainer.style.height = 300 + 'px';
  clockContainer.style.width = 300 + 'px';
  clockContainer.style.borderRadius = 50 + '%';
  for (var i = 1; i < 13; i++) { // создаем цифры в мал. контейнерах по всей окружности. i - количество часов
    var hourContainer = document.createElement('div');
    clockContainer.appendChild(hourContainer);
    hourContainer.style.cssText = 'position: absolute; ' +
      'background-color: white; ' +
      'height: 40px; ' +
      'width: 40px; ' +
      'border-radius: 50%;' +
      'font-size: 35px;' +
      'text-align: center';
    hourContainer.textContent = i.toString();// вносим значение цифр в мал.конейнеры
    var containerCenterX = clockContainer.offsetLeft + clockContainer.offsetWidth / 2; // рассчитываем центр окружности
    var containerCenterY = clockContainer.offsetTop + clockContainer.offsetHeight / 2;
    var angle = (30 * i) / 180 * Math.PI; // 360 градусов / 12 часов = 30
    var hourCenterX = containerCenterX + 120 * Math.sin(angle);
    var hourCenterY = containerCenterY - 120 * Math.cos(angle);
    hourContainer.style.left = Math.round(hourCenterX - hourContainer.offsetWidth / 2) + 'px';
    hourContainer.style.top = Math.round(hourCenterY - hourContainer.offsetHeight / 2) + 'px';
  }

  var arrows = []; // создаем массив для стрелок
  arrows[0] = document.createElement('div'); // создаем секундную стрелку
  clockContainer.appendChild(arrows[0]);

  arrows[1] = document.createElement('div'); // создаем минутную стрелку
  clockContainer.appendChild(arrows[1]);

  arrows[2] = document.createElement('div'); // создаем часовую стрелку
  clockContainer.appendChild(arrows[2]);
  for ( i = 0; i < arrows.length; i++) {  // задаем css свойства стрелкам
    arrows[i].style.height = 120 + 'px';
    arrows[i].style.width = 4 * (i + 1) + 'px'; // задаем разную ширину стрелок
    arrows[i].style.backgroundColor = 'black';
    arrows[i].style.opacity = 0.6;
    arrows[i].style.position = 'absolute';
    arrows[i].style.left = (clockContainer.offsetWidth / 2 + 4) + 'px'; // задаем расстояние от левого края с поправкой на ширину стрелки
    arrows[i].style.top = 45 + 'px';
    arrows[i].style.transformOrigin = 50 + '% ' + 100 + '%';
    arrows[i].style.borderRadius = 20 + '%';
  }



  var numericClock = document.createElement('span');
  clockContainer.appendChild(numericClock);
  numericClock.style.cssText = 'position: relative; ' +
    'font-size: 35px;' +
    'top: 25%;' +
    'left: 36%;' +
    'font-size: 25px;';

  function UpdateTime() {
    var CurrTime = new Date();
    var CurrTimeStr = FormatDateTime(CurrTime);
    numericClock.innerHTML = CurrTimeStr.toString();
    arrows[0].style.transform = 'rotate(' + (6 * CurrTime.getSeconds()) + 'deg)'; // 360 градусов окружности / 60 сек в минуте = 6 градусов одно движение стрелки
    arrows[1].style.transform = 'rotate(' + (6 * CurrTime.getMinutes()) + 'deg)';
    if (CurrTime.getHours() < 12) { // при 24-часовом формате после 12 часов чтобы не добегали лишние градусы
      arrows[2].style.transform = 'rotate(' + (0.5 * CurrTime.getMinutes() + (CurrTime.getHours() * 30)) + 'deg)';
    } else {
      arrows[2].style.transform = 'rotate(' + (0.5 * CurrTime.getMinutes() + ((CurrTime.getHours() - 12) * 30)) + 'deg)';
    }
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
  setInterval(UpdateTime, 1000); // задаем интервал для обновления положения стрелок и времени на числовых часах
})();

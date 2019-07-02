'use strict';

const baseRadius = 300; //радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 40; // радиус кружков с цифрами
let clockContainer = document.createElement('div'); // создаем каркас часов
let numericClock = document.createElement('span');
let arrows = []; // создаем массив для стрелок
arrows[0] = document.createElement('div'); // создаем секундную стрелку
arrows[1] = document.createElement('div'); // создаем минутную стрелку
arrows[2] = document.createElement('div'); // создаем часовую стрелку
createWatch();

function createWatch() {
  document.body.appendChild(clockContainer);
  clockContainer.style.backgroundColor = '#FCCA66';
  clockContainer.style.height = baseRadius + 'px';
  clockContainer.style.width = baseRadius + 'px';
  clockContainer.style.borderRadius = 50 + '%';
  createClockFace();
}

function createClockFace() {
  for (let i = 1; i < 13; i++) { // создаем цифры в мал. контейнерах по всей окружности. i - количество часов
    let hourContainer = document.createElement('div');
    clockContainer.appendChild(hourContainer);
    hourContainer.style.cssText = 'position: absolute; ' +
      'background-color: #48B382; ' +
      'height: ' + circleRadius + 'px; ' +
      'width: ' + circleRadius + 'px; ' +
      'border-radius: ' + numbersBaseRadius + '%;' +
      'font-size: 35px;' +
      'text-align: center';
    hourContainer.textContent = i.toString();// вносим значение цифр в мал.конейнеры
    let containerCenterX = clockContainer.offsetLeft + clockContainer.offsetWidth / 2; // рассчитываем центр окружности
    let containerCenterY = clockContainer.offsetTop + clockContainer.offsetHeight / 2;
    let angle = (30 * i) / 180 * Math.PI; // 360 градусов / 12 часов = 30
    let hourCenterX = containerCenterX + 120 * Math.sin(angle);
    let hourCenterY = containerCenterY - 120 * Math.cos(angle);
    hourContainer.style.left = Math.round(hourCenterX - hourContainer.offsetWidth / 2) + 'px';
    hourContainer.style.top = Math.round(hourCenterY - hourContainer.offsetHeight / 2) + 'px';
  }
  createArrow();
}
function createArrow() {
  clockContainer.appendChild(arrows[0]);
  clockContainer.appendChild(arrows[1]);
  clockContainer.appendChild(arrows[2]);
  for (let i = 0; i < arrows.length; i++) {  // задаем css свойства стрелкам
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
  createDigitalWatch();
}


function createDigitalWatch() {
  clockContainer.appendChild(numericClock);
  numericClock.style.cssText = 'position: relative; ' +
    'font-size: 35px;' +
    'top: 25%;' +
    'left: 36%;' +
    'font-size: 25px;';
}

function UpdateTime() {
  let CurrTime = new Date();
  let CurrTimeStr = FormatDateTime(CurrTime);
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
  let Hours = DT.getHours();
  let Minutes = DT.getMinutes();
  let Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}
function Str0L(Val, Len) {
  let StrVal = Val.toString();
  while (StrVal.length < Len) {
    StrVal = '0' + StrVal;
  }
  return StrVal;
}
setInterval(UpdateTime, 1000); // задаем интервал для обновления положения стрелок и времени на числовых часах

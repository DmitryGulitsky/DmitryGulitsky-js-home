'use strict';
let svgContainer = document.getElementById('clock');
const baseRadius = 150; // радиус циферблата
const numbersBaseRadius = baseRadius / 1.25; // радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const dotSize = 10;
const wrapper = document.getElementById('wrapper');
wrapper.setAttribute('width', '320');
wrapper.setAttribute('height', '320');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

function createWatch() {
  wrapper.style.cssText = 'display: flex; justify-content: center; align-items: center; height: 800px;';
  let base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  base.setAttribute('r', baseRadius.toString());
  base.setAttribute('cx', '160');
  base.setAttribute('cy', '160');
  base.setAttribute('fill', 'white');
  base.setAttribute('stroke', '#F1F1F1');
  base.setAttribute('stroke-width', '10');
  svgContainer.appendChild(base);
  base.appendChild(createClockFace());
  createDigitalWatch();
  svgContainer.appendChild(createArrow('hours', 6, 'black'));
  svgContainer.appendChild(createArrow('minutes', 4, 'black'));
  svgContainer.appendChild(createArrow('seconds', 2, 'red'));
  svgContainer.appendChild(createDecorativeDot(dotSize));
  return svgContainer;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = baseRadius + Math.round(Math.sin(angle) * numbersBaseRadius) + 10;
    let y = baseRadius - Math.round(Math.cos(angle) * numbersBaseRadius) + 10;
    svgContainer.appendChild(createHourCircle(x, y));
    svgContainer.appendChild(createHourNumber(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY) {
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', circleRadius.toString());
  circle.setAttribute('cx', circleX.toString());
  circle.setAttribute('cy', circleY.toString());
  circle.setAttribute('fill', '#F1F1F1');
  return circle;
}

function createDigitalWatch() {
  let textClock = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  textClock.setAttribute('width', '105');
  textClock.setAttribute('height', '35');
  textClock.setAttribute('x', baseRadius  + baseRadius / 15 - baseRadius / 3);
  textClock.setAttribute('y', baseRadius  + baseRadius / 15 + baseRadius / 5 );
  textClock.setAttribute('fill', '#f1f1f1');
  svgContainer.appendChild(textClock);
  createDigitalText('hourstext', -15);
  createDigitalText('minutestext', 10);
  createDigitalText('secondstext', 40);
  function createDigitalText(id, cx) {
    let digitsH = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    digitsH.setAttribute('x', (baseRadius  + 10 - baseRadius / 6 + cx).toString());
    digitsH.setAttribute('y', (baseRadius  + 10 + baseRadius / 2.7).toString());
    digitsH.setAttribute('fill', '#B0C4DE');
    digitsH.setAttribute('id', id);
    digitsH.setAttribute('font-size', '25');
    svgContainer.appendChild(digitsH);
  }
  return textClock;
}

function createHourNumber(circleX, circleY, number) {
  var hourNumber = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  if (number < 10) {
    hourNumber.setAttribute('x', (circleX - 5).toString());
  } else {
    hourNumber.setAttribute('x', (circleX - 10).toString());
  }
  hourNumber.setAttribute('y', (circleY + 5).toString());
  hourNumber.style.fontSize = 20 + 'px';
  hourNumber.textContent = number;
  return hourNumber;
}

function createArrow(arrowType, arrowWidth, arrowColor) {
  let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.id = arrowType;
  arrow.setAttribute('x1', (baseRadius + 10).toString());
  arrow.setAttribute('y1', (baseRadius + 10).toString());
  arrow.setAttribute('x2', (baseRadius + numbersBaseRadius - 10).toString());
  arrow.setAttribute('y2', (baseRadius + 10).toString());
  arrow.setAttribute('stroke', arrowColor.toString());
  arrow.setAttribute('stroke-width', arrowWidth.toString());
  arrow.setAttribute('stroke-linecap', 'round');
  return arrow;
}

function createDecorativeDot(size) {
  let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', baseRadius + 10);
  dot.setAttribute('cy', baseRadius + 10);
  dot.setAttribute('r', size);
  svgContainer.appendChild(dot);
  return dot;
}

// Logic

function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour   = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360 - 90;
  let thisMinuteRotate = (minute) / 60 * 360 - 90;
  let thisHourRotate   = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate );
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  let arrow = document.getElementById(handle);
  arrow.setAttribute('transform', `rotate(${degree} ${baseRadius + 10} ${baseRadius + 10})`);
}

function updateDigitalWatch(hour, minute, second) {
  let digitalWatchSeconds = document.getElementById('secondstext');
  let digitalWatchMinutes = document.getElementById('minutestext');
  let digitalWatchHours = document.getElementById('hourstext');
  digitalWatchSeconds.textContent = ':' + addZeroToNumber(second);
  digitalWatchMinutes.textContent = ':' + addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}

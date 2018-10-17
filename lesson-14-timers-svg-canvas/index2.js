'use strict';
let svgContainer = document.getElementById('clock');
const baseRadius = 150; // радиус циферблата
const numbersBaseRadius = baseRadius / 1.25; // радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const wrapper = document.getElementById('wrapper');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

function createWatch() {
  let base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  base.setAttribute('r', baseRadius.toString());
  base.setAttribute('cx', (wrapper.offsetWidth / 2).toString());
  base.setAttribute('cy', (wrapper.offsetHeight / 2).toString());
  base.setAttribute('fill', 'white');
  base.setAttribute('stroke', '#F1F1F1');
  base.setAttribute('stroke-width', '10');
  svgContainer.appendChild(base);
  base.appendChild(createClockFace());
  createDigitalWatch();
  svgContainer.appendChild(createArrow('hours', 6, 'black'));
  svgContainer.appendChild(createArrow('minutes', 4, 'black'));
  svgContainer.appendChild(createArrow('seconds', 2, 'red'));
  return svgContainer;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = ((wrapper.offsetWidth - circleRadius) / 2) + 10 + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = ((wrapper.offsetHeight - circleRadius) / 2) + 10 - Math.round(Math.cos(angle) * numbersBaseRadius);
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
  let hoursNumberDigital = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  hoursNumberDigital.id = 'hoursNumberDigital';
  hoursNumberDigital.setAttribute('x', (wrapper.offsetWidth / 2 - 25).toString());
  hoursNumberDigital.setAttribute('y', (wrapper.offsetHeight / 2 - 50).toString());
  svgContainer.appendChild(hoursNumberDigital);
  let minutesNumberDigital = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  minutesNumberDigital.id = 'minutesNumberDigital';
  minutesNumberDigital.setAttribute('x', (wrapper.offsetWidth / 2 - 5).toString());
  minutesNumberDigital.setAttribute('y', (wrapper.offsetHeight / 2 - 50).toString());
  svgContainer.appendChild(minutesNumberDigital);
  let secondsNumberDigital = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  secondsNumberDigital.id = 'secondsNumberDigital';
  secondsNumberDigital.setAttribute('x', (wrapper.offsetWidth / 2 + 15).toString());
  secondsNumberDigital.setAttribute('y', (wrapper.offsetHeight / 2 - 50).toString());
  svgContainer.appendChild(secondsNumberDigital);
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
  arrow.id = arrowType + 'Arrow';
  arrow.setAttribute('x1', (wrapper.offsetWidth / 2).toString());
  arrow.setAttribute('y1', (wrapper.offsetHeight / 2).toString());
  arrow.setAttribute('x2', (wrapper.offsetWidth / 2 + baseRadius * 0.8).toString());
  arrow.setAttribute('y2', (wrapper.offsetHeight / 2).toString());
  arrow.setAttribute('stroke', arrowColor.toString());
  arrow.setAttribute('stroke-width', arrowWidth.toString());
  arrow.setAttribute('stroke-linecap', 'round');
  arrow.setAttribute('transform', 'translate(18, 18) rotate(180, 0, 0)');
  arrow.style.transformOrigin = (wrapper.offsetWidth / 2) + 'px' + (wrapper.offsetHeight / 2) + 'px';
  return arrow;
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
  let arrow = document.getElementById(handle + 'Arrow');
  arrow.style.transform = `rotate(${degree}deg)`;
}

function updateDigitalWatch(hour, minute, second) {
  let digitalWatchSeconds = document.getElementById('secondsNumberDigital');
  let digitalWatchMinutes = document.getElementById('minutesNumberDigital');
  let digitalWatchHours = document.getElementById('hoursNumberDigital');
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute) + ':';
  digitalWatchHours.textContent = addZeroToNumber(hour) + ':';
}

function addZeroToNumber(currentTime){
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
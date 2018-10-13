'use strict';

(function () {
  function createClockCircles() {
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
      var hourCenterX = containerCenterX + 100 * Math.sin(angle);
      var hourCenterY = containerCenterY - 100 * Math.cos(angle);

      hourContainer.style.left = Math.round(hourCenterX - hourContainer.offsetWidth / 2) + 'px';
      hourContainer.style.top = Math.round(hourCenterY - hourContainer.offsetHeight / 2) + 'px';
    }



  }

  createClockCircles();
})();

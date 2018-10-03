(function () {
  var objInput = {
    className: 'menu open close Menu subMenu sub-menu menu'
  };
  function hideClassName(obj, clsName) {
    function filterByClassName(item) {
      return (item !== clsName);
    }
    var tempArr;
    if (obj.className) {
      console.log('Input: ' + obj.className);
      obj.className += '';
      tempArr = obj.className.split(' ');
      tempArr = tempArr.filter(filterByClassName);
      obj.className = tempArr.join(' ');
      console.log('Output: ' + obj.className);
    } else {
      console.log('Свойство className у объекта не найдено или пустое');
    }
  }
  hideClassName(objInput, 'menu');
})();

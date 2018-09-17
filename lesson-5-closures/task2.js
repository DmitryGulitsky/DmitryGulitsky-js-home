function removeClass(obj, cls) {
  var newClassName = '';
  var classes = obj.className.split(' ');
  for (i = 0; i < classes.length; i++) {
    if (classes[i] !== cls) {
      newClassName += classes[i] + ' ';
    }
  }
  obj.className = newClassName;
  return obj;
}

function removeDublicateClass(obj) {
  var newObj = [];
  var objHash = [];
  var classesArray = obj.className.split(' ');
  for (i = classesArray.length - 1; i >= 0; i--) {
    if (classesArray[i] in objHash) continue;
    newObj.push(classesArray[i]);
    objHash[classesArray[i]] = 1;
  } return objHash;
}
var obj = {
  className: 'open menu menu'
};
var i;
console.log(removeClass(obj, 'open'));
console.log(removeDublicateClass(obj));

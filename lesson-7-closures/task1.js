'use strict';
function sum(a) {
  function sumWithA(b) {
    return a + b;
  }
  return sumWithA;
}
console.log(sum(1)(2));
console.log(sum(5)(-1));

'use strict';
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var maxTasksCompleted = 0;
var maxTasksCompletedName = '';
for (var key in tasksCompleted) {
  if (tasksCompleted[key] > maxTasksCompleted) {
    maxTasksCompleted = tasksCompleted[key];
    maxTasksCompletedName = key;
  }
}
console.log(maxTasksCompletedName + ' has maximum result with ' + maxTasksCompleted + ' tasks.');
module.exports = maxTasksCompletedName;
module.exports = maxTasksCompleted;

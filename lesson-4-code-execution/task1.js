'use strict';
function findMaxTasksCompletedName(tasksCompleted) {
  var maxTasksCompleted = 0;
  var maxTasksCompletedName = '';
  var nameCounter = 0;
  for (var key in tasksCompleted) {
    if (tasksCompleted[key] === null) {
      maxTasksCompletedName = 'Никто';
    }
    else if (tasksCompleted[key] > maxTasksCompleted) {
      maxTasksCompleted = tasksCompleted[key];
      maxTasksCompletedName = key;
    }
  }
  for (key in tasksCompleted) {
    if (tasksCompleted[key] === maxTasksCompleted) {
      nameCounter++;
    }
  }
  if (nameCounter > 1) {
    maxTasksCompletedName = 'Ничья';
  }
  return maxTasksCompletedName;
}
module.exports = findMaxTasksCompletedName;
